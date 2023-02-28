import AdminJS from 'adminjs';
import AdminJSExpress from '@adminjs/express'
import express  from "express";
import "dotenv/config";
import "./database";
import AdminJSSequelize from '@adminjs/sequelize'

AdminJS.registerAdapter(AdminJSSequelize);

const express =  express();

const adminJS = new AdminJS ({
    databases: [],
    rootPath: '/admin',
    resources: []
}); 

const router = AdminJSExpress.buildRouter();

app.use(adminJS.options.rootPath, router);
app.listen(5432, () => {
    console.log('AdminJS is under http://localhost:5432/admin')
})