\# 🌍 Serverless Static Website on AWS (Project 1)



\## 🧠 Overview

This project demonstrates how I built and deployed a \*\*serverless static website\*\* using \*\*Amazon S3\*\* and \*\*Amazon CloudFront\*\*.  

It’s globally distributed, fully secure with HTTPS, and requires no servers — built 100% on AWS managed services.



---



\## 🏗️ Architecture

\- \*\*Amazon S3\*\* → Hosts static files (HTML, CSS, JS)

\- \*\*Amazon CloudFront\*\* → CDN for global delivery and HTTPS

\- \*\*IAM\*\* → Secure access management



\*\*Flow:\*\* User → CloudFront → S3 → Website



---



## 🖼️ Screenshots

### 🪣 S3 Static Website Hosting
![S3 Hosting](https://raw.githubusercontent.com/dankbhardwaj/serverless-static-website-aws/main/screenshots/s3-hosting.png)

### 🌎 CloudFront Distribution Setup
![CloudFront](https://raw.githubusercontent.com/dankbhardwaj/serverless-static-website-aws/main/screenshots/cloudfront-distribution.png)

### 💻 Final Deployed Website
![Website](https://raw.githubusercontent.com/dankbhardwaj/serverless-static-website-aws/main/screenshots/final-website.png)




---



\## ⚙️ Steps I Followed

1\. Created an S3 bucket (`bhaskarstaticweb`) and enabled static website hosting.  

2\. Uploaded `index.html`, `style.css`, and `script.js`.  

3\. Set bucket policy for public read access.  

4\. Created a CloudFront distribution with S3 website endpoint as the origin.  

5\. Accessed the live website using the CloudFront URL with HTTPS.



---



\## 🧩 Tech Stack

| Service | Purpose |

|----------|----------|

| \*\*Amazon S3\*\* | Static file hosting |

| \*\*CloudFront\*\* | Global CDN \& HTTPS |

| \*\*IAM\*\* | Access control |

| \*\*AWS Console\*\* | Setup \& configuration |



---



\## 🏁 Project Outcome

✅ Deployed a \*\*serverless\*\*, globally distributed static website  

✅ Achieved \*\*HTTPS security\*\* and \*\*low latency\*\*  

✅ Demonstrated AWS \*\*core DevOps and cloud architecture skills\*\*



---



\## 🧑‍💻 Author

\*\*Bhaskar Sharma\*\*  

DevOps \& Cloud Engineer  



🔗 \[GitHub Profile](https://github.com/dankbhardwaj)  

🔗 \[LinkedIn Profile](https://www.linkedin.com/in/bhaskar-sharma-718122202/)



---



⭐ \*If you like this project, please give it a star on GitHub!\*



