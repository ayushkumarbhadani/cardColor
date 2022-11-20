const mongoose = require('mongoose');
const express = require('express');
const cardColor = require('../Model/model');
const saveCard = require('../Model/saveCard');

const allColor = async (req, res) => {
    try {
        const data = await cardColor.create(req.body);
        console.log(req.body);
        res.json({message:"Inserted!",success:true});
    }catch(err){
        console.log(err);
        res.json({message:err,success:false});
    }
}
const getAllColor=async(req,res)=>{
    try{
        const data = await cardColor.find({});
        let dataToSend=data.map(item=>{
            const someData=item.data.map(({quality,traits})=>{
                return {quality,traits}
            });
            return {
                id:item._id,
                name:item.name,
                code:item.code,
                data:someData
            }
            
        });
        res.json({data:dataToSend});
    }
    catch(err){
        console.log(err);
        res.json({message:err,success:false});
    }
}
const save=async(req,res)=>{
    try{
        if(!(req.body.title && req.body.description && req.body.code))
        {
            throw new Error('Insufficient Data!');
        }
        const dataToSave={title: req.body.title, description: req.body.description, code:req.body.code}
        const data=await saveCard.create(dataToSave);
        res.json({message:"Inserted!",success:true});

    }catch(err){
        console.log(err);
        res.json({message:err,success:false});
    }
}
const fetchCard=async (req,res)=>{
    try{
        const data=await saveCard.find({});
        res.json({data,success:true});

    }catch(err){
        console.log(err);
        res.json({message:err,success:false});
    }
}
const findTitle=async(req,res)=>{
    try{
        const data=await saveCard.find({title:req.body.title});
        console.log(data);
        if(data.length>0){
            res.json({msg:false});
            return;
        }
        res.json({msg:true});

    }catch(err){
        console.log(err);
        res.json({message:err,success:false});
    }
}
const filter=async(req,res)=>{
    try{
        if(req.body.title && req.body.description){
        const check=await saveCard.find({ $or: [ {"title":{ "$regex": req.body.title, "$options": "i" }}, { "description": { "$regex": req.body.description, "$options": "i" } } ] });
        console.log(check);
        res.json({check});
        return;
        }
        res.json({msg:"Provide both Title and Description"});
    }catch(err){
        console.log(err);
        res.json({message:err,success:false});
    }
}
module.exports = { allColor,getAllColor,save, fetchCard, findTitle,filter};