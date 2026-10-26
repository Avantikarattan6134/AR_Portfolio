// Portfolio content. Edit this file to update the site — everything renders from here.
window.PORTFOLIO_DATA = {
  person: {
    name: "Avantika Rattan",
    role: "M.S. Robotics · University of Michigan",
    blurb: "Robotics and machine-learning researcher working across the full autonomy stack (perception, SLAM, state estimation, equivariant deep learning, planning, and control), from model design through real-time deployment and field validation on physical robot platforms.",
    seeking: "Seeking research & robotics/AV roles · Graduating Dec 2026",
    email: "arattan@umich.edu",
    phone: "734-255-6901",
    linkedin: "https://linkedin.com/in/avantika-rattan-a837231b9",
    github: "https://github.com/Avantikarattan6134",
    resume: "assets/Avantika_Rattan_Resume.pdf",
    photo: "assets/New_Profile.jpeg"
  },
  stats: [
    { value: "3.978", label: "Graduate GPA / 4.00" },
    { value: "3", label: "Peer-reviewed publications" },
    { value: "8+", label: "Physical robot platforms" },
    { value: "14", label: "Research & course projects" }
  ],
  education: [
    { degree: "M.S. Robotics", school: "University of Michigan, Ann Arbor", when: "Expected Dec 2026", detail: "GPA 3.978 / 4.00 · Mobile Robotics, Robot Perception, ML for Robotics, Robotic Systems Lab, Self-Driving Cars, Control Systems, Embedded Robotics" },
    { degree: "B.Tech, Mechatronics & Automation", school: "Vellore Institute of Technology", when: "Graduated May 2024", detail: "CGPA 9.32 / 10 · Ranked 3rd in a cohort of ~200 · Robot Kinematics & Dynamics, Control Engineering, Industrial Automation, Signal Processing" }
  ],
  experience: [
    {
      role: "Graduate Research Assistant",
      org: "CURLY Lab, University of Michigan",
      when: "May 2026 to Present",
      note: "Advisor: Prof. Maani Ghaffari",
      points: [
        "Shipped a drift-free autonomous maritime perception & localization system (Nautilus ASV, with Honda Research Institute), fusing camera, LiDAR & IMU to detect and localize trailers without drift.",
        "Led GINIO, an SO(3)-equivariant neural inertial odometry study (ResNet vs LN-ResNet vs VN-ResNet), under review at CoRL 2026.",
        "Deployed a real-time ROS2 inference pipeline across Fetch, Husky and drone platforms with Jetson edge nodes and Tailscale networking.",
        "Stood up an off-road autonomy stack (Phoenix-R2, ARL Warthog) and debugged CycloneDDS domain issues."
      ]
    },
    {
      role: "Research Collaborator",
      org: "Honda Research Institute (via CURLY Lab)",
      when: "May 2026 to Jul 2026",
      note: "",
      points: [
        "GPS/IMU/camera sensor fusion for autonomous trailer localization, producing quantitative RMSE evaluation and root-cause failure analysis for a mid-project technical report."
      ]
    },
    {
      role: "Robotics & Research Engineer Intern",
      org: "Lacuum AI (Startup)",
      when: "Jun 2026 to Aug 2026",
      note: "",
      points: [
        "Built a multi-sensor perception & localization pipeline for an autonomous boat (camera, LiDAR, GNSS, IMU) for real-time positioning in unstructured outdoor environments.",
        "Deployed an invasive-aquatic-plant detector feeding a semantic mapping system built on Convolutional Bayesian Kernel Inference (ConvBKI).",
        "Integrated global aerial maps via the Google Maps API with the platform's local sensor-derived maps."
      ]
    },
    {
      role: "AI & Robotics Trainer Intern",
      org: "TechyGuide, India",
      when: "Jan 2025 to Mar 2025",
      note: "",
      points: [
        "Built and debugged real robot hardware, designed standardized SOPs, and communicated robotics concepts to diverse audiences."
      ]
    },
    {
      role: "Early Collaborative Research: Project Phoenix (Flash SLAM)",
      org: "with Kevin Biju Mathew, Purdue IDEAS Lab",
      when: "",
      note: "",
      points: [
        "Contributed to cross-platform shared 3D mapping across a Clearpath Warthog, Boston Dynamics Spot, and drone platforms."
      ]
    }
  ],
  skills: [
    { group: "Perception & Computer Vision", items: ["PyTorch", "TensorFlow", "CNNs", "ResNet / LN-ResNet / VN-ResNet", "ViT", "YOLO11 / v8", "U-Net", "BEVUNet", "PointNet", "NeRF", "3D Gaussian Splatting", "OpenCV"] },
    { group: "State Estimation & SLAM", items: ["EKF / UKF", "RI-EKF on SE2(3)", "Particle filters", "GTSAM factor graphs", "DLIO", "SLAM Toolbox", "AMCL", "Monocular VO", "Flash SLAM"] },
    { group: "Sensor Fusion & Calibration", items: ["LiDAR / Camera / IMU / GPS fusion", "Intrinsic & extrinsic calibration", "Time synchronization", "PCL", "DBSCAN", "RANSAC", "AprilTag", "PnP", "Homography"] },
    { group: "Planning & Control", items: ["A*", "RRT*", "MGO-RRT*", "NMPC", "LQR", "PID", "Trajectory generation"] },
    { group: "RL & Imitation Learning", items: ["PPO (GAE, reward shaping)", "DQN", "Imitation learning", "Behavior cloning analysis", "Diffusion policy"] },
    { group: "Programming & Systems", items: ["Python", "C++", "MATLAB", "ROS2", "Git", "Docker", "CMake", "Linux", "HPC / Slurm", "Jetson", "ESP32 / Raspberry Pi"] },
    { group: "Simulation", items: ["CARLA", "Gazebo", "ARL / Phoenix-R2"] },
    { group: "Mathematics", items: ["Linear algebra", "Probability & statistics", "SE(3) / SO(3) / SE2(3) Lie theory", "Bayesian inference", "Numerical optimization", "Camera models"] }
  ],
  publications: [
    { title: "GINIO: Geometric Interface for Neural Inertial Odometry", venue: "CoRL 2026", status: "Under review", authors: "Rattan, A. et al.", doi: "" },
    { title: "Quantum Computing for Advanced Driver Assistance Systems and Autonomous Vehicles: A Review", venue: "IEEE Access, vol. 13, pp. 17554–17582, 2025", status: "First author", authors: "Rattan, A. et al.", doi: "10.1109/ACCESS.2025.3532958" },
    { title: "Monitoring the Condition of Nitrogen-Filled Tires Using Weightless Neural Networks", venue: "Automatika, 65(2):523–537, 2024", status: "", authors: "Rattan, A. et al.", doi: "10.1080/00051144.2024.2310979" }
  ],
  projects: [
    {
      id: "ginio",
      title: "GINIO: Geometric Interface for Neural Inertial Odometry",
      category: "Research · State Estimation",
      year: "2026",
      badge: "Under review · CoRL 2026",
      summary: "Standard neural inertial odometry silently breaks when the IMU is remounted. GINIO shows SO(3)-equivariant architectures don't.",
      media: "Fetch IMU-remount experiment rig + ATE trajectory plots",
      image: "assets/fetch-robot.jpg",
      overview: "Neural inertial odometry networks are trained at a fixed IMU orientation, but real deployments remount sensors. GINIO systematically compares standard ResNet against LN-ResNet and VN-ResNet equivariant variants for SO(3)-equivariant neural inertial odometry, quantifying how each degrades under physical IMU remounting.",
      approach: [
        "Designed controlled 0° / 90° / 180° IMU remount experiments on a physical Fetch robot with a BNO055 IMU.",
        "Compared ResNet, LN-ResNet (Lie-Norm) and VN-ResNet (Vector-Neuron) backbones under identical training and evaluation.",
        "Built a real-time ROS2 inference pipeline with multi-robot YAML config, deployed across Fetch, Husky and drone.",
        "Generated all figures in matplotlib; added a professor-requested blue-formatted appendix."
      ],
      results: [
        { value: "81×", label: "Worst-case ResNet degradation under remounting" },
        { value: "16.5×", label: "Improvement from equivariant architecture" },
        { value: "2.018 m", label: "Equivariant ATE vs 76.389 m baseline" }
      ],
      stack: ["PyTorch", "ROS2", "Fetch", "BNO055 IMU", "SO(3) equivariance", "matplotlib"],
      links: [{ label: "Paper (under review)", href: "#" }]
    },
    {
      id: "nautilus",
      title: "Nautilus ASV: Drift-Free Maritime Perception & Localization",
      category: "Research · Perception + SLAM",
      year: "2026",
      badge: "Honda Research Institute",
      summary: "An autonomous surface vessel that detects and localizes trailers on open water with no drift, fusing camera, LiDAR and IMU.",
      media: "ASV on-water footage + segmentation overlays + 3D map",
      overview: "A production-quality maritime perception and localization system for the Nautilus autonomous surface vessel, built with Honda Research Institute. The system detects and localizes trailers and produces a drift-free, globally consistent 3D map and trajectory from fused camera, LiDAR and IMU data.",
      approach: [
        "Trained YOLO instance segmentation on 2880×2880 images from a 75,000+ image FL/Japan dataset, annotated with SAM2 assistance.",
        "Synchronized segmentation with LiDAR via a 120 ms window, aggregated over 25 frames, then applied DBSCAN clustering, RANSAC plane fitting and two-pass PCA for distance-aware pose estimation.",
        "Fused DLIO LiDAR-inertial odometry with a GTSAM pose-graph optimizer (odometry, landmark & loop-closure constraints).",
        "Engineered for production robustness: graceful logged failure handling per stage plus continuous monitoring."
      ],
      results: [
        { value: "0.993", label: "Box mAP50 (trailer segmentation)" },
        { value: "0.981", label: "Mask mAP50" },
        { value: "75k+", label: "Annotated training images (FL + Japan)" }
      ],
      stack: ["YOLO", "SAM2", "DLIO", "GTSAM", "PCL", "DBSCAN", "RANSAC", "ROS2"],
      links: [{ label: "HRI technical report", href: "#" }]
    },
    {
      id: "impact-aware",
      title: "Impact-Aware State Estimation: RI-EKF + LSTM on SE2(3)",
      category: "State Estimation",
      year: "2025–2026",
      badge: "with Pranav Jain",
      summary: "Diagnosed a catastrophic off-road estimation failure, then fixed it with a learned adaptive process-noise model, a 96% error reduction.",
      media: "ROOAD trajectory overlays + ATE/RPE evaluation plots",
      overview: "A Right-Invariant EKF on SE2(3), in C++, fusing RTK GPS (10 Hz), IMU (400 Hz) and monocular visual odometry on the public ROOAD off-road UGV dataset. On dynamic terrain the filter suffered a catastrophic failure (6.326 m ATE); an LSTM-based adaptive process-noise scaling model closed the gap.",
      approach: [
        "Built a Right-Invariant EKF on SE2(3) in C++ with RTK GPS, IMU and monocular VO measurement models.",
        "Implemented monocular VO from scratch: FAST features, Lucas-Kanade optical flow, bidirectional consistency, RANSAC Essential-matrix estimation and rotation recovery.",
        "Designed an LSTM adaptive process-noise scaling module to handle dynamic-terrain impacts.",
        "Built a full ATE / RPE / segment-error evaluation pipeline across six independent sequences."
      ],
      results: [
        { value: "96%", label: "ATE error reduction from LSTM fix" },
        { value: "0.258 m", label: "Final ATE (from 6.326 m)" },
        { value: "6", label: "Independent evaluation sequences" }
      ],
      stack: ["C++", "RI-EKF", "SE2(3)", "LSTM", "RTK GPS", "Monocular VO"],
      links: [{ label: "GitHub", href: "#" }]
    },
    {
      id: "vio-vit",
      title: "Visual-Inertial Odometry via ViT with Equivariant Layers",
      category: "State Estimation · Learning",
      year: "2026–Present",
      badge: "In progress",
      summary: "A ViT-based VIO foundation model with SE(3)-equivariant layers for geometry-consistent camera–IMU state estimation.",
      media: "Architecture diagram + camera–IMU fusion schematic",
      overview: "An in-progress Vision-Transformer visual-inertial odometry foundation model that embeds SE(3)-equivariant layers, targeting geometry-consistent, multi-modal state estimation from camera and IMU streams.",
      approach: [
        "ViT backbone for visual feature extraction over image sequences.",
        "SE(3)-equivariant layers to enforce geometry-consistent representations.",
        "Multi-modal fusion of camera and IMU measurements for robust odometry."
      ],
      results: [
        { value: "Active", label: "Currently in development" }
      ],
      stack: ["PyTorch", "ViT", "SE(3) equivariance", "VIO"],
      links: []
    },
    {
      id: "rl-control",
      title: "PPO & DQN: RL for Embodied Robot Control",
      category: "Reinforcement Learning",
      year: "2025–2026",
      badge: "",
      summary: "PPO and DQN implemented from scratch for sequential decision-making and motion planning, with a study of imitation-learning failure modes.",
      media: "Training reward curves + policy rollout frames",
      overview: "From-scratch implementations of PPO and DQN for embodied robot control and motion planning, alongside an analysis of when imitation-learning approaches break down.",
      approach: [
        "PPO from scratch: clipped surrogate objective, GAE advantage estimation and reward design.",
        "DQN with experience replay and target networks for sequential decision-making.",
        "Studied diffusion policy and analyzed behavior-cloning failure modes: distribution shift and compounding errors."
      ],
      results: [
        { value: "2", label: "Algorithms implemented from scratch" }
      ],
      stack: ["PyTorch", "PPO", "DQN", "GAE"],
      links: [{ label: "GitHub", href: "#" }]
    },
    {
      id: "ros2-nav",
      title: "Full-Stack ROS2 Autonomous Navigation (Hardware Deployed)",
      category: "SLAM · Planning · Control",
      year: "2025–2026",
      badge: "Deployed on hardware",
      summary: "LiDAR SLAM, AMCL localization, Nav2 planning and closed-loop trajectory execution running on real TurtleBot hardware.",
      media: "TurtleBot navigating a mapped environment + RViz view",
      overview: "A complete autonomy stack deployed end-to-end on TurtleBot hardware (mapping, localization, planning and closed-loop control), with real hardware failure debugging across every layer.",
      approach: [
        "LiDAR SLAM mapping and AMCL localization with Nav2 planning.",
        "Tuned A* and RRT* global planners.",
        "Implemented and tuned PID and NMPC controllers for closed-loop trajectory execution.",
        "Debugged real hardware failures across sensor, planning and control layers."
      ],
      results: [
        { value: "4", label: "Layers integrated: sensing → SLAM → planning → control" }
      ],
      stack: ["ROS2", "Nav2", "AMCL", "SLAM Toolbox", "TurtleBot", "NMPC", "PID"],
      links: [{ label: "GitHub", href: "#" }]
    },
    {
      id: "ros2-manip",
      title: "ROS2 Manipulation, URDF/XACRO & Arm Calibration",
      category: "Manipulation",
      year: "2025–2026",
      badge: "",
      summary: "Modeled arms and workcells in URDF/XACRO and implemented teach-and-repeat motion with AprilTag camera calibration.",
      media: "RViz robot model + AprilTag calibration board",
      overview: "Coursework building a manipulation stack: kinematic modeling of robot arms and workcell components, teach-and-repeat motion, and vision-based calibration.",
      approach: [
        "Modeled robot arms and workcell components with URDF/XACRO, TF frames and RViz workflows.",
        "Implemented teach-and-repeat arm motion and joint waypoint handling.",
        "AprilTag-based camera calibration, PnP pose estimation and homography-based board alignment."
      ],
      results: [
        { value: "URDF", label: "Kinematic modeling + TF workflow" }
      ],
      stack: ["ROS2", "URDF/XACRO", "TF2", "RViz", "AprilTag", "PnP"],
      links: []
    },
    {
      id: "bevunet",
      title: "BEVUNet: Multi-Camera 3D Perception",
      category: "Perception",
      year: "2025–2026",
      badge: "",
      summary: "A surround-camera bird's-eye-view encoder–decoder for occupancy prediction and semantic scene understanding.",
      media: "Multi-camera BEV occupancy grid visualization",
      overview: "A surround-camera bird's-eye-view perception model in PyTorch with multi-camera extrinsic calibration, benchmarked for robustness to calibration and synchronization error.",
      approach: [
        "Built a surround-camera BEV encoder–decoder in PyTorch.",
        "Handled multi-camera extrinsic calibration for occupancy prediction and semantic understanding.",
        "Benchmarked sensitivity to calibration errors and synchronization offsets."
      ],
      results: [
        { value: "BEV", label: "Multi-camera occupancy prediction" }
      ],
      stack: ["PyTorch", "BEV", "U-Net", "Multi-camera calibration"],
      links: []
    },
    {
      id: "3d-perception",
      title: "3D Perception: PointNet, NeRF & Gaussian Splatting",
      category: "Perception",
      year: "2025–2026",
      badge: "",
      summary: "Point-cloud semantic segmentation with PointNet, plus NeRF and 3D Gaussian Splatting for reconstruction and sim-to-real.",
      media: "Point-cloud segmentation + Gaussian-splat reconstruction",
      overview: "3D scene understanding across representations: LiDAR point-cloud semantic segmentation and detection, and neural / splat-based reconstruction for sim-to-real transfer.",
      approach: [
        "Applied PointNet for LiDAR point-cloud semantic segmentation and 3D object detection using PCL pipelines.",
        "Implemented NeRF for neural scene reconstruction.",
        "Implemented 3D Gaussian Splatting for reconstruction and sim-to-real transfer."
      ],
      results: [
        { value: "3", label: "Representations: points, NeRF, 3DGS" }
      ],
      stack: ["PointNet", "NeRF", "3D Gaussian Splatting", "PCL"],
      links: []
    },
    {
      id: "carla-sim2real",
      title: "Sim2Real Pipeline: CARLA Domain Randomization",
      category: "Perception · Simulation",
      year: "2025–2026",
      badge: "",
      summary: "Automated clear/rain/fog/night domain randomization in CARLA, quantifying sim-to-real perception gaps.",
      media: "CARLA weather conditions grid + mIoU degradation chart",
      overview: "An automated domain-randomization and evaluation pipeline in CARLA that stress-tests perception across weather conditions and quantifies the sim-to-real gap.",
      approach: [
        "Built automated multi-condition (clear, rain, fog, night) domain randomization.",
        "Ran condition-stratified evaluation pipelines.",
        "Quantified sim2real perception gaps and mIoU degradation by condition."
      ],
      results: [
        { value: "0.757", label: "Perception mAP" },
        { value: "4", label: "Weather conditions stratified" }
      ],
      stack: ["CARLA", "Domain randomization", "mAP / mIoU"],
      links: []
    },
    {
      id: "nanobench",
      title: "NanoBench Drone Dataset: Architecture Comparison",
      category: "Learning · State Estimation",
      year: "2025–2026",
      badge: "",
      summary: "Compared LN-ResNet vs VN-ResNet for inertial odometry, defining a boundary condition for architecture selection.",
      media: "Seen vs unseen trajectory error comparison plots",
      overview: "A controlled comparison of LN-ResNet and VN-ResNet for inertial odometry on a drone dataset, evaluated on both seen and unseen trajectory splits.",
      approach: [
        "Compared LN-ResNet and VN-ResNet on seen and unseen trajectory splits.",
        "Analyzed the role of training-set trajectory exposure on generalization."
      ],
      results: [
        { value: "Boundary", label: "VN-ResNet wins with exposure, loses without" }
      ],
      stack: ["PyTorch", "LN-ResNet", "VN-ResNet", "Inertial odometry"],
      links: []
    },
    {
      id: "diff-pf",
      title: "ROB599 Differentiable Particle Filter",
      category: "State Estimation · Learning",
      year: "2025–2026",
      badge: "IEEE report",
      summary: "Benchmarked five observation-model architectures for differentiable particle filtering across three maze tasks.",
      media: "Maze navigation tasks + architecture comparison table",
      overview: "A study comparing observation-model architectures for a differentiable particle filter on three maze-navigation tasks, run on the Great Lakes HPC cluster.",
      approach: [
        "Compared CNN, ViT, ResNet, ResNet+LSTM and InEKF+ResNet observation models.",
        "Ran three maze-navigation tasks using TensorFlow 1.15 on Great Lakes HPC.",
        "Produced a full IEEE LaTeX report."
      ],
      results: [
        { value: "ResNet", label: "Won all three tasks" },
        { value: "4–5×", label: "InEKF+ResNet underperformance (multimodal posterior)" }
      ],
      stack: ["TensorFlow 1.15", "Differentiable PF", "HPC / Slurm"],
      links: []
    },
    {
      id: "mgo-rrt",
      title: "MGO-RRT*: Planning with Moss Growth Optimization",
      category: "Motion Planning",
      year: "2025–2026",
      badge: "IEEE report",
      summary: "Integrated Moss Growth Optimization into RRT* for improved path planning, benchmarked against baseline planners.",
      media: "Planned paths vs baseline RRT* comparison",
      overview: "A motion-planning course project embedding Moss Growth Optimization into the RRT* sampling process, with quantitative benchmarking against baseline planners in a full IEEE-format report.",
      approach: [
        "Integrated Moss Growth Optimization into RRT* sampling.",
        "Benchmarked path quality and performance against baseline planners.",
        "Produced a full IEEE-format technical report."
      ],
      results: [
        { value: "RRT*", label: "Optimizer-enhanced sampling" }
      ],
      stack: ["RRT*", "Moss Growth Optimization", "Motion planning"],
      links: []
    },
    {
      id: "hardware-vit",
      title: "Hardware Robotics Builds (VIT)",
      category: "Hardware · Embedded",
      year: "2023–2024",
      badge: "",
      summary: "Built a 4-wheeled autonomous robot and a humanoid biped prototype from scratch: motors, sensors and embedded control.",
      media: "Assembled robot chassis + biped prototype photos",
      overview: "Hands-on hardware builds at Vellore Institute of Technology: assembling, wiring and programming autonomous robots from the ground up.",
      approach: [
        "Assembled and wired a 4-wheeled autonomous robot: motors, ESP32, ultrasonic sensors and PWM control.",
        "Built a humanoid biped prototype."
      ],
      results: [
        { value: "2", label: "Robots built from scratch" }
      ],
      stack: ["ESP32", "PWM control", "Ultrasonic sensors", "Embedded C"],
      links: []
    }
  ]
};
