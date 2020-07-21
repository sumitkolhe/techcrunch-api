# 💻 TechCrunch API [UNOFFICIAL]

---

#### This is an Unofficial API for TechCrunch. You can fetch all the articles/news from Techcrunch.com using this API.

---

## :label: Description

This API currently supports two routes. 

1. **All** - All the latest articles/news that is posted on Techcrunch.

2. **Articles by tag** - You can get articles/news by particular tag.

 
---

## :mag: Usage

### # All Articles/News

Make a `GET`request to `https://techcrunch.vercel.app`


#### Response Format

The response JSON Object looks something like this - 

```JSON
{
  "total": 20,
  "articles": [
    {
      "title": "Netflix tests new low-cost subscription plan in India",
      "link": "https://techcrunch.com/2020/07/21/netflix-tests-new-low-cost-subscription-plan-in-india/",
      "timestamp": "2020-07-21T02:52:33-07:00",
      "description": "",
      "image": "https://techcrunch.com/wp-content/uploads/2019/07/GettyImages-1065115112.jpg?w=300&h=160&crop=1",
      "author": [
        "Manish Singh"
      ]
    },
    {
      "title": "Russia’s BestDoctor attracts international investors for its $4.5M round",
      "link": "https://techcrunch.com/2020/07/21/russias-bestdoctor-attracts-international-investors-for-its-4-5m-round/",
      "timestamp": "2020-07-21T02:45:53-07:00",
      "description": "The private medical insurance market is expanding year on year by over 5%, and that includes in Russia where the insurance market – which grew by 4% in 2019 – has reached a value of almost $22",
      "image": "https://techcrunch.com/wp-content/uploads/2015/08/shutterstock_109243421.jpg?w=300&h=160&crop=1",
      "author": [
        "Mike Butcher"
      ]
    }
  ]
}
```
---

### # Articles/News by Tag

Make a `GET`request to `https://techcrunch.vercel.app/tag/{tag-name}`

**Example** https://techcrunch.vercel.app/tag/serverless


#### Response Format

The response JSON Object looks something like this - 

```JSON
{
  "total": 14,
  "articles": [
    {
      "title": "Vendia raises $5.1M for its multicloud serverless platform",
      "link": "https://techcrunch.com/2020/07/01/vendia-raises-5-1m-for-its-multi-cloud-serverless-platform/",
      "time": "2020-07-01T08:00:17-07:00",
      "content": "When the inventor of AWS Lambda, Tim Wagner, and the former head of blockchain at AWS, Shruthi Rao, co-found a startup, it’s probably worth paying attention. Vendia, as the new venture is called",
      "image": "https://techcrunch.com/wp-content/uploads/2020/07/GettyImages-1197243194.jpg?w=300&h=160&crop=1",
      "author": [
        "Frederic Lardinois"
      ]
    },
    {
      "title": "Iguazio brings its data science platform to Azure and Azure Stack",
      "link": "https://techcrunch.com/2019/05/08/iguazio-brings-its-data-science-platform-to-azure-and-azure-stack/",
      "time": "2019-05-08T05:00:34-07:00",
      "content": "Iguazio, an end-to-end platform that allows data scientists to take machine learning models from data ingestion to training, testing and production, today announced that it is bringing its solution to",
      "image": "https://techcrunch.com/wp-content/uploads/2019/05/GettyImages-1072325472.jpg?w=300&h=160&crop=1",
      "author": [
        "Frederic Lardinois"
      ]
    }
  ]
}
```
---
## :construction_worker: Setup 

This API is created as a serverless function that is specifically made to be hosted on **Vercel**. You can modify the code to make it work with **Nodejs based server** or as **AWS Lambda functions**

### Run locally
* You will need Vercel CLI to run this locally. 
```
npm i -g vercel
```
* Login into vercel CLI by following documentation here https://vercel.com/docs/cli#commands/login

* Clone the Repo
```
$ git clone https://github.com/sumitkolhe/techcrunch-api

$ cd techcrunch-api
```

* Install the dependencies
```
npm install
```

* Run the API 
```
vercel dev
```

> **NOTE:** You will need to deploy the project to Vercel first even if you want to run it locally using `vercel dev`. The Vercel CLI wil guide you through the process.
---

## :rocket: Deploy to Vercel

**You can directly deploy this repo to your Vercel account by clicking the button below.**
<br>

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/sumitkolhe/techcrunch-api)
