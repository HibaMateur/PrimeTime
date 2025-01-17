import express from 'express';
import mongoose from 'mongoose';
import logger from '../helpers/logger.js';
import stream from '../models/stream.js';
import multer from "multer";
import fetch from 'node-fetch';



export const createStream = async (req, res) => {
    const post = req.body;
    const newPostMessage = new stream({ ...post })

    try {
        console.log(newPostMessage)
       await newPostMessage.save();

        res.status(201).json(newPostMessage );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const viewsInc = async (req, res) => {
  const meetingId = req.params.id;
  const doc = await stream.findOne({meetingId:meetingId});
  
  try {
    doc.viewerCount=doc.viewerCount+1
    doc.save();
      console.log(doc)
    

      res.status(201).json(doc);
  } catch (error) {
      res.status(409).json({ message: error.message });
  }
}


export const setRecording = async (req,res) => {
    const meetid = req.params.meetid;
    const streams = await stream.findOne({meetingId:meetid});
    
    streams.isrecorded=true;
    streams.save();
    return res.status(200).json(streams);
}

export const getStreamByName = async (req, res) => { 
const name = req.params.name;
const streams = await stream.find({streamerName:name,isrecorded:true});
return res.status(200).json(streams);

}
export const getAllStreamsByName = async (req, res) => { 
  const name = req.params.name;
  const streams = await stream.find({streamerName:name});
  return res.status(200).json(streams);
  
  }


export const getStreamById = async (req, res) => { 
        
    
    try {
        logger.info("tesst");
        const post = await stream.findById(req.params.id);
        
        res.status(200).json(post);
    } catch (error) {
        logger.error("errr");
        res.status(404).json({ message: error.message });
    }
}

    export const getStreams = async (req, res) => { 
        
    
        try {
            logger.info("tesst");
            const post = await stream.find();
            
            res.status(200).json(post);
        } catch (error) {
            logger.error("errr");
            res.status(404).json({ message: error.message });
        }
    }

    // image upload start here
const multerConfig = multer.diskStorage({
    destination : (req,file,callback)=>{
      callback(null,'../client/public/images/Streams')
    },
    filename:(req,file,callback)=>{
     // const ext= file.mimetype.split('/')[1];
      console.log(req);
      callback(null,`${req.body.username}.jpg`);
    }
  })
  const uploadd =multer({
    storage:multerConfig,
  })
  export const uploadImage = uploadd.single('photo')
  
  export const upload = (req,res)=>{
    res.status(200).json({
      succes:'success',
    })
  }
  
  // image upload ends here

export const fetch_sessions = async(req,res)=>{
  const options = {
	method: "GET",
	headers: {
		"Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiI2OTZjNDQ2Zi1jYTk5LTRiMzItOTljYS1hYzFmNWI4NjUxYTgiLCJwZXJtaXNzaW9ucyI6WyJhbGxvd19qb2luIl0sImlhdCI6MTY1MDgyMDI4MCwiZXhwIjoxNjUxNDI1MDgwfQ.-M8K-XpUMJJO4DdzipGIsrI0K5Vrl9c8Fb3RRJhckxc",
		"Content-Type": "application/json",
	},
};
const url= `https://api.videosdk.live/v2/recordings?roomId=`+req.params.meetid;
const response = await fetch(url, options);
const data = await response.json();
console.log(data);
res.status(200).json(data)
}

