# Web Development Class Project

Welcome to our class project! This guide will walk you through the process of adding your own webpage to our class website. Don't worry if you're new to this - we'll go through each step carefully.

## What You'll Need

- A computer with internet access
- Git installed on your computer (we'll show you how)
- A GitHub account (we'll help you set one up)
- A text editor (we recommend Visual Studio Code)

## Step 1: Set Up Your Tools

### 1.1 Create a GitHub Account

1. Go to [github.com](https://github.com)
2. Click "Sign up"
3. Follow the prompts to create your account

### 1.2 Install Git

1. Go to [git-scm.com](https://git-scm.com)
2. Download the version for your operating system
3. Install it, accepting all the default options

### 1.3 Install Visual Studio Code

1. Go to [code.visualstudio.com](https://code.visualstudio.com)
2. Download and install it

### 1.4 Set Up Git with Your GitHub Account

1. Open Command Prompt (Windows) or Terminal (Mac)
2. Type these commands, replacing the email and name with your own:
   ```
   git config --global user.email "you@example.com"
   git config --global user.name "Your Name"
   ```

## Step 2: Clone the Class Repository

1. Open Command Prompt (Windows) or Terminal (Mac)
2. Navigate to where you want to keep your project:
   ```
   cd Documents
   ```
3. Clone the repository:
   ```
   git clone https://github.com/michiganhackers/webteamf2024.git
   ```
   (Your instructor will provide the actual URL)
4. Move into the project folder:
   ```
   cd [REPOSITORY_NAME]
   ```

## Step 3: Create Your Webpage

1. Open Visual Studio Code
2. Go to File > Open Folder and select the repository folder you just cloned
3. In VS Code, right-click on the `students` folder and select "New Folder"
4. Name the folder with your uniquename
5. Right-click on your new folder and select "New File"
6. Name the file `index.html`
7. Copy and paste this starter code into your `index.html`:

   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>Your Name's Page</title>
   </head>
   <body>
       <h1>Welcome to [Your Name]'s Page</h1>
       <p>This is my page for the web development class project.</p>
       <!-- Add more content here -->
   </body>
   </html>
   ```

8. Add more content to your page as desired

## Step 4: Save Your Changes with Git

1. In VS Code, go to the Source Control tab (looks like a branch)
2. You should see your new files listed
3. Click the "+" next to each file to stage the changes
4. Type a message describing your changes (e.g., "Add my personal page")
5. Click the checkmark to commit your changes

## Step 5: Push Your Changes to GitHub

1. In VS Code, click the "..." in the Source Control tab
2. Select "Push"
3. If prompted, enter your GitHub username and password

## Step 6: View Your Page on the Class Website

1. Wait a few minutes for the changes to be processed
2. Go to `https://michiganhackers.github.io/webteamf2024/`
3. You should see a link to your page on the homepage

## Updating Your Page

To make changes to your page:

1. Open your project in VS Code
2. Make your changes
3. Save the file
4. Go through Steps 4 and 5 again to commit and push your changes

## Need Help?

If you run into any issues:
1. Check that you've followed each step carefully
2. Ask another member if they've encountered a similar issue
3. If you're still stuck, don't hesitate to ask your lead for help

Remember, everyone starts as a beginner. Don't be afraid to ask questions and keep practicing!
