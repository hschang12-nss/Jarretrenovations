============================================
  JARRETTS RENOVATIONS - GALLERY FOLDER
============================================

HOW TO ADD NEW PHOTOS TO THE WEBSITE:
--------------------------------------
1. Copy your photo into this "gallery" folder
   (JPG, JPEG, PNG, or WEBP formats all work)

2. Open "images.json" in any text editor (Notepad, etc.)

3. Add a new entry following this exact format:

   {
     "file": "your-photo-filename.jpg",
     "title": "Project Title Here",
     "tag": "Type of Work",
     "desc": "City, GA · Short description of the project"
   }

   Make sure to add a comma after the } of the previous entry!

4. Save images.json and re-upload the whole gallery folder
   to your hosting provider (Netlify, etc.)

That's it! The website will automatically include
the new photo in the rotating slideshow.

EXAMPLE images.json with 4 photos:
-----------------------------------
[
  {
    "file": "project-bathroom-1.jpg",
    "title": "Master Bathroom Renewal",
    "tag": "Bathroom Remodel",
    "desc": "East Point, GA · Full renovation & tile work"
  },
  {
    "file": "project-shower-1.jpg",
    "title": "Custom Shower Installation",
    "tag": "Shower",
    "desc": "Atlanta metro · Custom tile & fixture upgrade"
  },
  {
    "file": "your-new-photo.jpg",
    "title": "Kitchen Flooring",
    "tag": "Flooring",
    "desc": "Decatur, GA · Hardwood installation"
  }
]

TIP: Keep photo filenames simple — no spaces!
Use hyphens instead: "my-project-photo.jpg"
============================================
