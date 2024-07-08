const express = require('express');
const router = express.Router();

// Welcome Page
router.get('/', (req, res) => {
    res.render('index');
});

// Library Page
router.get('/library', (req, res) => {
    res.render('library');
});

// Community Chat Page
router.get('/chat', (req, res) => {
    res.render('chat');
});

// Advertisements Page
router.get('/ads', (req, res) => {
    res.render('ads');
});

// Reporting Page
router.get('/report', (req, res) => {
    res.render('report');
});

// Entertainment Page
router.get('/entertainment', (req, res) => {
    res.render('entertainment');
});

// Login Page
router.get('/login', (req, res) => {
    res.render('login');
});

// Register Page
router.get('/register', (req, res) => {
    res.render('register');
});

module.exports = router;
