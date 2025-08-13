// every obect in the array represents a section of the resume
// can be added, removed or modified as needed
// change only strings, not the structure

export const educationDetails = [
    {
        yearRange: "2019 - 2023",
        title: " M.Sc. Mechatronics and Robotics ",
        place: "Leibniz University Hannover, Germany",
        desc: "Specialization in robotics, CNC machines, and reinforcement learning",
    },
    {
        yearRange: "2009 - 2015",
        title: "B.Sc. Mechatronics",
        place: "Albaath University Homs (Syrien)",
        desc: "Bachelor's thesis in the field of image processing, with a focus on developing an algorithm for object detection and tracking.",
    },
   
];

export const experienceDetails = [
    {
yearRange: "2024 - 2025",
        title: "Mobile Robot Manipulation",
       
        desc: " Modern Robotics Specialization Developed and implemented software to control a mobile manipulator, combining motion control of a wheeled mobile base and a robotic arm to perform a pick-and-place task. Integrated advanced concepts including trajectory planning, odometry for mobile robots, and feedback control. The project utilized the KUKA youBot—featuring an omnidirectional mecanum-wheel base, a 5-joint robotic arm, and a gripper—and was tested in the  CoppeliaSim robot simulation environment.",  
    },
    { 
        yearRange: "2023",
        title: "Multi-critical personnel planning on machines through reinforcement learning",
        place: "Institut für Werkzeugmaschinen und Fertigungstechnik",
        desc: "Master’s Thesis – Multi-Criteria Workforce Scheduling using Reinforcement Learning Developed a practical method for workforce scheduling based on Q-Learning, considering employee skills, availability, and learning behavior while ensuring production system stability. Implemented the model in Python and Plant Simulation, integrating a reward-based system to optimize task allocation. Validated the approach through simulations with varying parameters, demonstrating the impact of workforce performance and buffer times on throughput.",
       
    },
    { yearRange: "2022",
        title: "Investigation of process forces and engagement conditions during dynamic grooving",
        place: "Institut für Werkzeugmaschinen und Fertigungstechnik",
        desc: "The aim of this work is to gain knowledge about the influence of process variables on the process forces and engagement conditions in the NTX 1000 turning/milling machine from DMG MORI Germany in order to optimize the processes.",
        
    },
];

export const skills = [
    { name: "KUKA KRL", percent: 65 },
    { name: "Python", percent: 80 },
    { name: "MATLAB/Simulink (model-based development MBD)", percent: 80 },
    { name: "Machine learning algorithms", percent: 60 },
    { name: "Manuel software testing", percent: 70 },
    { name: "Mobile robotics devlopment", percent: 85 },
];