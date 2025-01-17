import express from 'express';
const router= express.Router();
import Course from "../models/course.js";
import User from "../models/user.js";

import cors from 'cors';

router.use(cors());


router.get('/', async(req,res)=>{
    try{
        const courses = await Course.find()
        res.json(courses)

    }catch(err){
        res.send('Error '+ err)
    }
})

router.post('/',async(req,res)=>{
    const course1 = new Course({
        name : req.body.name,
        type : req.body.type
    })
    

    try{
        const c1= await course1.save()

        /* adding teacher to course */
        const course = await Course.findById(c1._id)
        const teacher = await User.findById(req.body.user._id)
        if(teacher !== null && course !== null)
        {
            const oldstudents = course.students;
            const set = new Set([course]);
            var teacher_exist=0;
            const ee =Array.from(oldstudents)
            
            ee.forEach(element => {
                if(element._id==teacher._id){
                    teacher_exist=1;
                }
                
            });
            
            if(teacher_exist==0){
                await Course.findByIdAndUpdate({ '_id': course._id }, { $addToSet: { teachers: teacher._id } });
                await User.findByIdAndUpdate({ '_id': teacher._id }, { $addToSet: { courses_teaching: course._id } });
                const c1= await course.save()
                const course2 = await Course.findById(course._id)
                await res.json(course2)
            }
            else if(teacher_exist==1)
            {
                console.log('this teacher already exists in students list')
                res.send('this teacher already exists in students list')
            }

        }
        else res.send('teacher or course doesnt exist !')









        /* end teacher add*/





        
    }catch(err){
        res.send('Error',err)
    }

})

/*
router.get('/retreivecourseteachers/:id',async (req,res)=>{
    try{
        const course = await Course.findById(req.params.id)
            const oldstudents = course.teachers;
            const set = new Set([course]);
            var teacher_exist=0;
            let teacher = new User();
            let ee =Array.from(oldstudents)
            let teachers = new Array();
            ee.forEach(async element => {
                let p = new user();
                p= await User.findById(element._id)
                console.log(p)
                teachers.push(p)
                console.log(teachers)
                
                
            });
            setTimeout(() => {res.json(teachers)}, 2000);
    }
    catch(err){
        res.send('Error'+err)
    }

})*/


router.put('/addteachertocourse/:id',async(req,res)=>{
    try{
        const course = await Course.findById(req.params.id)
        const teacher = await User.findById(req.body.teacher_id)
        if(teacher !== null && course !== null)
        {
            const oldteachers = course.teachers;
            var student_exist=0;
            const ee =Array.from(oldteachers)
            var teacher_exist=0;
            
            ee.forEach(element => {
                if(element._id==req.params.id){
                    teacher_exist=1;
                }
                
            });
            
            if(teacher_exist==0){
                await Course.findByIdAndUpdate({ '_id': req.params.id }, { $addToSet: { teachers: req.body.teacher_id } });
                await User.findByIdAndUpdate({ '_id': req.body.teacher_id }, { $addToSet: { courses_teaching: req.params.id} });
                const c1= await course.save()
                const course2 = await Course.findById(req.params.id).populate("teachers")
                console.log(course2)
                await res.json(course2)
            }
            else if(teacher_exist==1)
            {
                console.log('this teacher already exists in students list')
                res.send('this teacher already exists in students list')
            }

        }
        else res.send('teacher or course doesnt exist !')
        
        
        
    }catch(err){
        res.send('Error'+err)
    }

})

router.put('/addstudenttocourse',async(req,res)=>{
    
    try{
        const course = await Course.findById(req.body.course_id)
        const student = await User.findById(req.body.student_id)
        if(student !== null && course !== null)
        {
            const oldteachers = course.teachers;
            var student_exist=0;
            const ee =Array.from(oldteachers)

            ee.forEach(element => {
                if(element._id==req.body.student_id){
                    student_exist=1;
                }
                
            });
            console.log(student_exist)

            if(student_exist==0){
                await Course.findByIdAndUpdate({ '_id': req.body.course_id }, { $addToSet: { students: req.body.student_id } });
                await User.findByIdAndUpdate({ '_id': req.body.student_id }, { $addToSet: { courses_learning: req.body.course_id } });
                const c1= await course.save()
                const course2 = await Course.findById(req.body.course_id)
                await res.json(course2)
            }
            else if(student_exist==1)
            {
                console.log('this student already exists in teachers list')
                res.send('this student already exists in teachers list')
            }
        }
        else res.send('student or course doesnt exist !')
        
        
    }catch(err){
        res.send('Error')
    }

})


router.put("/removestudentfromcourse", async (req, res) => {
    try {
      const course = await Course.findById(req.body.course_id);
      const user = await User.findById(req.body.student_id);
      //console.log(user);
      const oldstudents = course.students || [];
      const oldcourses = user.courses_learning || [];
  
      for (var i = 0; i < oldstudents.length; i++) {
        const student_id = String(oldstudents[i]._id);
  
        if (student_id === req.body.student_id) {
          oldstudents.splice(i, 1);
  
          i--;
        }
      }
      console.log(oldcourses);
      for (var i = 0; i < oldcourses.length; i++) {
        const course_id = String(oldcourses[i]._id);
  
        if (course_id === req.body.course_id) {
          oldcourses.splice(i, 1);
  
          i--;
        }
      }
      console.log(oldcourses);
      course.students = oldstudents;
  
      user.courses_learning = oldcourses;
      console.log("d");
      console.log(user);
      const c2 = await user.save();
      const c1 = await course.save();
      const course2 = await Course.findById(req.body.course_id);
      const user2 = await User.findById(req.body.student_id);
      await res.json(course2);
    } catch (err) {
      res.send("Error");
    }
  });
  
  router.put("/removeteacherfromcourse/:id", async (req, res) => {
    try {
      const course = await Course.findById(req.params.id);
      const user = await User.findById(req.body.teacher_id);
      const oldteachers = course.teachers || [];
      const oldcourses = user.courses_teaching || [];
      for (var i = 0; i < oldteachers.length; i++) {
        const teacher_id = String(oldteachers[i]._id);
  
        if (teacher_id === req.body.teacher_id) {
          oldteachers.splice(i, 1);
          i--;
        }
      }
  
      for (var i = 0; i < oldcourses.length; i++) {
        const course_id = String(oldcourses[i]._id);
  
        if (course_id === req.params.id) {
          oldcourses.splice(i, 1);
  
          i--;
        }
      }
      course.teachers = oldteachers;
      const c1 = await course.save();
      const c2 = await user.save();
      const course2 = await Course.findById(req.params.id);
      await res.json(course2);
    } catch (err) {
      res.send("Error"+err);
    }
  });
  

router.get('/:id', async(req,res)=>{
    try{
        const course = await Course.findById(req.params.id)
        res.json(course)

    }catch(err){
        res.send('Error '+ err)
    }
})

router.get('/retreivecourseteachers/:id/', async(req,res)=>{
    try{
        const course = await Course.findById(req.params.id).populate("teachers");
        res.json(course)
        console.log(course)

    }catch(err){
        res.send('Error '+ err)
    }
})

router.get('/retreivecoursestudents/:id/', async(req,res)=>{
    try{
        const course = await Course.findById(req.params.id).populate("students");
        await res.json(course)
        console.log(course)

    }catch(err){
        res.send('Error '+ err)
    }
})

router.delete('/:id', async(req,res)=>{
    try{
        const course = await Course.findByIdAndDelete(req.params.id)
        res.json(course)

    }catch(err){
        res.send('Error '+ err)
    }
})

router.put('/:id', async(req,res)=>{
    try{
        const course = await Course.findById(req.params.id)
        if(req.body.name)
        course.name =req.body.name
        if(req.body.type)
        course.type =req.body.type
        if(req.body.user)
        course.user =req.body.user

        await course.save()
        res.json(course)

    }catch(err){
        res.send('Error '+ err)
    }
})



export default router;