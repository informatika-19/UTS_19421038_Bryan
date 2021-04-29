const mhsModel = require('../model/mhs')
const objectid = require('mongoose').Types.ObjectId

exports.create= (data) =>
  new Promise((resolve, reject)=> {
    mhsModel.create(data)
      .then(()=> resolve({
        status : true,
        pesan : 'Data Succesfully Added'
      })).catch(()=> ({
        status : false,
        pesan : 'Failed To Add Data'
      }))
  })

exports.showAllData = () =>
    new Promise((resolve, reject)=>{
        mhsModel.find()
      .then (result =>{
        resolve({
          status : true,
          pesan : 'Data Is Shown',
          data : result
        })
      }).catch(()=> reject ({
        status : false,
        pesan : 'Failed To Show Data',
        data : []
      }))
    })  


exports.showbyID = (id) =>
    new Promise((resolve, reject) => {
        mhsModel.findOne({
        _id: objectid(id)
      })
      .then (result =>{
        resolve({
          status : true,
          pesan : 'Data Is Shown',
          data : result
        })
      })
      .catch(()=> reject ({
        status : false,
        pesan : 'Failed To Show Data',
        data : null
      }))
    })


exports.delete = (id) =>
  new Promise((resolve, reject)=>{
    mhsModel.deleteOne({
      _id: objectid(id)
    }).then (() => resolve({
      status : true,
      pesan : 'Data Succesfully Deleted',
      })).catch(()=> reject ({
      status : false,
      pesan : 'Failed To Delete Data',
      }))
  })

exports.update = (id, data)=>
  new Promise((resolve, reject)=>{
    mhsModel.updateOne({
      _id: objectid(id)
    }, data).then (() => resolve({
        status : true,
        pesan : 'Data Succesfully Updated',
      })).catch(()=> reject ({
      status : false,
      pesan : 'Failed To Update Data',
    }))
  })