# [Covid Crisis Chatbot](https://callforcodechatbotui.eu-gb.cf.appdomain.cloud/ )
The COVID-19, also known as the coronavirus, is an ongoing pandemic of coronavirus disease 2019 (COVID‑19), caused by severe acute respiratory syndrome coronavirus 2 (SARS‑CoV‑2). The World Health Organization declared the outbreak a Public Health Emergency of International Concern on 30 January, and a pandemic on 11 March. Today’s audiences prefer social media over traditional channels but many social media channels have been challenged by fake news and privacy breaches, and aren’t always fully reliable. This is where our Chatbot solution “YODA” integrated into a platform comes into picture with its modern features like text-based interaction, ML, Thermal Imaging, Sentiment Analysis and a Doctor-Patient portal to address the coronavirus crisis

![image](https://user-images.githubusercontent.com/29679357/89035306-554e5080-d358-11ea-9f47-dbe6d15a209c.png)

## Authors

1.  [Sanchari Roy](https://github.com/sanchariroy20)(Cognizant)
2.  [Subham Biswas](https://github.com/fiore-code)(Cognizant)
3.  [Bitan Bhowmick](https://github.com/BitanBhowmick)(Cognizant)

## Installation

Clone the git repository and use the corresponding commands:

```bash
npm install
npm start
```

## Objectives

Chatbots are perfect for when users are appearing on any kind of website for location based information or generic COVID-19 related information. Especially since they cannot wait to talk to real person, this information is crucial to be received right away 24/7. They are asking questions like:
1.  What is the number cases in a specific area
2.  What is the lockdown situation
3.  Where can I get a test done or nearby medical facility?
4.  What are the symptoms
5.  How does the virus spread?
6.  Support systems can range from financial consulting to mental health counseling
7.	ML algorithms for prediction of COVID for False Positive or False Negative cases.
8.  Connect with the doctor by sitting at your home.



## Technology Stack
1.  IBM Cloud 
2.	Node JS
3.  Python
4.  Database(NoSQL)

## Architecture

![solution architecture](https://user-images.githubusercontent.com/29679357/89049610-28f1fe80-d36f-11ea-9bbf-03975c23049b.png)

## Video
[![IMAGE ALT TEXT HERE](https://img.youtube.com/vi/L0uRhHbRSMs/0.jpg)](https://www.youtube.com/watch?v=L0uRhHbRSMs)

For more detailed explanation. Please visit https://youtu.be/TqPSFHqQyI4

## Features

### Chatbot
  1.  COVID-19 Self-Assessment Check: Here, the bot will be asking some basic questions based on the current situation to the user, like long term symptoms, current symptoms, travel history and many more. The set of questions are modified by Watson Assistant depending on the user’s input and based on those a preliminary analysis of the user’s health will be done from the backend which will act as a pro-active approach
  
  ![image](https://user-images.githubusercontent.com/29679357/89051085-563fac00-d371-11ea-9afc-9f9ef34ee96f.png)
  
 2. Chest X-Ray Analysis: This analysis has been implemented using Visual Recognition Service of IBM. Here, we have developed our custom image classifier that will classify “Chest X-Ray” images which will be provided by the user as an input to the bot.
 
 ![image](https://user-images.githubusercontent.com/29679357/89051149-70798a00-d371-11ea-8d9c-30070abd6af9.png)
 
 3. Sentiment Analysis of COVID victims:T his is one of the most unique features of the application. We have implemented this using Python and Machine Learning (NaiveBayesClassifier). Based on user's input, the polarity of the sentence is determined whether the tone of the sentence is “Bad”, ”Worst”, ”Good”, ”Best”. This is implemented in the Chatbot using REST API deployed in IBM Cloud Foundry.
 
![image](https://user-images.githubusercontent.com/29679357/89051262-9a32b100-d371-11ea-94a1-8f8a7d91edb4.png)

4.  COVID-19 News and Updates of the world: This section of the bot has been done through IBM Discovery and Webhook. Here, an IBM Action has been written to get the COVID-19 daily updates from an external data source (Johns Hopkins CSSE). This along with the Discovery is acting as the data source to provide the user with updated COVID counts across the countries over the world and important news. 

![image](https://user-images.githubusercontent.com/29679357/89051329-b898ac80-d371-11ea-820e-e6bb79517ca1.png)

5.  User Report as PDF: Again, this is a highlighting point of the application since with the help of this we are able to consolidate the user data into a PDF and they can share it with doctor and keep it with themselves for future reference.

![image](https://user-images.githubusercontent.com/29679357/89051553-10cfae80-d372-11ea-9a97-b7dcde381f43.png)

### Doctor Patient Portal
This component is designed using Angular in the Front End and in the backend the services are written in Python. The full functionality has been implemented using REST API written in Flask Python and for the database we are using MongoDB. 

![image](https://user-images.githubusercontent.com/29679357/89051646-32c93100-d372-11ea-8327-216f3a2988b5.png)

![image](https://user-images.githubusercontent.com/29679357/89051707-46749780-d372-11ea-86ff-7ac52f367790.png)

Login module is done via OTP. When user tries to login it will ask for the registered email id and user type. Based on the correct input an OTP will be sent to user’s email and based on that login is done.

![image](https://user-images.githubusercontent.com/29679357/89051762-59876780-d372-11ea-96ed-e5a400411f22.png)


The Portal is having two separate modules for Patient and Doctors. 

Some of the key features from the Patient module are:
1.	Easy connect with verified set of doctors anytime anywhere.
2.	EMR (Electronic Medical Records) Management facility.
3.	Can easily share any file, reports, and images with Doctors for assistance.
4.	Analytics dashboard comprising of various health statistics.
5.	List of available doctors at a go.

Some of the key features from the Doctor module are:
1.	Doctor needs to verify themselves in “complete your profile” section by providing his/her credentials as Registration Number and all. 
2.	Doctors can easily connect with their patients whoever is willing to share their reports with them seeking their help during this crisis time.

## IBM Services
1.  Watson Assistant
2.  Discovery Services
3.  Functions
4.  Visual Recognition
5.  Actions
6.  APIs
7.  Cloud Foundry
8.  Toolchain

## Documents
[Call for Code 2020 Hackathon_v1.0.docx](https://github.com/fiore-code/CallforCodechatbot/files/5007909/Call.for.Code.2020.Hackathon_v1.0.docx)

