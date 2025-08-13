// filters values for portfolio projects as categories
// projects can be filtered based on these categories
// filters or projects can be added or removed as per requirement
// projects can have multiple categories
// thumbImage must be in the images/projects/*.* folder


// Static Filters Menu
export const filters = {
    ROBOTICS: "Industrial robots",
    REINFORCEMENTLEARNING: "Mobile robots", // Leerzeichen → Anführungszeichen
    CNC: "CNC lathes", // ebenfalls mit Anführungszeichen
    Mobile_Robotics: "Kuka youBot",
};


// Static Project Data
export const projects = [
    {
        title: "Project 1",
        date: "July 16, 2019",
        thumbImage: "images/projects/project-1.jpg",
        categories: ["Industrial robots"],
    },
    {
        title: "Project 2",
        date: "July 16, 2019",
        thumbImage: "images/projects/project-2.jpg",
        categories: ["Mobile robots"],
    },
    {
        title: "Project 3",
        date: "July 16, 2019",
        thumbImage: "images/projects/project-3.jpg",
        categories: ["CNC lathes"],
    },
    {
        title: "Project 4",
        date: "July 16, 2019",
        thumbImage: "images/projects/project-4.jpg",
        categories: ["Kuka youBot"],
    },
];