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
      title: "Impact-Aware State Estimation for Off-Road Motion: InEKF on SE₂(3)",
      category: "State Estimation",
      year: "2026",
      badge: "ROB 530 · with Pranav Jain",
      summary: "Diagnosed why a GPS/IMU invariant EKF oscillates catastrophically on off-road hills (the non-holonomic constraint fights GPS corrections), then fixed it with jerk-triggered and LSTM-learned adaptive noise and constraint relaxation: a 96% ATE reduction.",
      media: "ROOAD trajectory overlays + ATE/RPE evaluation plots",
      image: "assets/impact-trajectory-rt5.png",
      gallery: [
        { src: "assets/impact-rpe-ate-bars.png", caption: "RPE and ATE across all six ROOAD sequences: baseline InEKF vs jerk-adaptive vs LSTM-adaptive" },
        { src: "assets/impact-signals-rt5.png", caption: "IMU jerk, predicted process-noise scale α, and trajectory error over time on the held-out rt5_updown sequence" },
        { src: "assets/impact-ate-over-time.png", caption: "ATE over time: the baseline filter oscillates on hills while both adaptive filters stay flat" }
      ],
      overview: "A Right-Invariant EKF on SE₂(3) fusing a 400 Hz VectorNav IMU, 10 Hz RTK GPS and a 30 Hz monocular camera on the public ROOAD off-road dataset (Clearpath Warthog, Texas A&M RELLIS campus). The baseline filter's hard non-holonomic constraint (zero lateral and vertical velocity) conflicts with GPS corrections during hill traversal: every fix pushes the estimate up the slope and the constraint zeros it 25 ms later, producing a 6.3 m mean ATE. Two adaptive mechanisms learn when to relax the constraint and inflate process noise: a jerk-threshold heuristic and a two-layer LSTM that predicts a process-noise scale α and a relaxation factor β from 50-sample IMU windows. Both cut ATE by 96%; the LSTM achieves the best RPE on five of six sequences.",
      approach: [
        "Implemented the InEKF on SE₂(3) with state-independent error dynamics, IMU propagation, RTK-GPS position updates, a non-holonomic-constraint pseudo-measurement, and a visual-odometry rotation update.",
        "Monocular VO from scratch: FAST corners, Lucas–Kanade optical flow with a bidirectional consistency check, RANSAC essential-matrix estimation and pose recovery, with quality gates on inlier count, rotation magnitude and jerk.",
        "InEKF+Jerk: detect impacts when IMU jerk exceeds 8 m/s³, spike the process-noise scale up to 15× and constraint relaxation up to 0.85, then decay geometrically.",
        "InEKF+LSTM: a two-layer, 128-unit LSTM over [a, ω, jerk, |a|, |ω|] windows with sigmoid heads for α ∈ [0.1, 20] and β ∈ [0, 0.85]; labels generated analytically in O(N) from jerk percentiles so no filter re-runs are needed; trained on four sequences and tested on two held-out ones.",
        "Full evaluation suite: ATE, RPE, segment-level ATE on high-dynamic impact regions, and velocity-space metrics (speed RMSE, heading error), with Umeyama alignment."
      ],
      results: [
        { value: "96%", label: "Mean ATE reduction vs the InEKF baseline" },
        { value: "0.258 m", label: "Mean ATE with the jerk-adaptive filter (0.277 m with LSTM), down from 6.326 m" },
        { value: "5 / 6", label: "Sequences where the LSTM filter achieves the best RPE" },
        { value: "19%", label: "Further ATE gain from monocular VO on rt5_updown" }
      ],
      stack: ["Python", "InEKF", "SE₂(3)", "PyTorch LSTM", "OpenCV", "RTK GPS", "VectorNav IMU", "Monocular VO", "ROOAD"],
      links: [{ label: "GitHub", href: "https://github.com/Avantikarattan6134/Impact-Aware-S.E.-for-Off-Road-Motion" }]
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
      title: "MBot Warehouse Robot: SLAM, Planning & Autonomous Exploration",
      category: "SLAM · Planning · Control",
      year: "2025",
      badge: "1st place · ROB 550 BotLab",
      summary: "A from-scratch autonomy stack on a differential-drive MBot: PID wheel control, occupancy-grid SLAM with Monte Carlo localization, A* planning, frontier exploration and a custom forklift. Placed first overall in the ROB 550 competition.",
      media: "MBot with forklift + SLAM map",
      image: "assets/mbot-robot.jpg",
      gallery: [
        { src: "assets/mbot-slam-map.png", caption: "Estimated paths: Monte Carlo localization (blue) vs odometry (yellow) vs ground truth (green)" },
        { src: "assets/mbot-slam-occupancy.png", caption: "Occupancy grid of the test maze produced by the full online SLAM system" },
        { src: "assets/mbot-pid-step.png", caption: "Wheel velocity tracking for feedforward, PID and FF+PID on a 0.5 m/s step command" },
        { src: "assets/mbot-forklift.png", caption: "Two-stage forklift: fixed frame, moving frame, 3D-printed couplers and servo winch" }
      ],
      overview: "End-to-end design and implementation of an autonomous mobile warehouse robot on the Michigan Robotics MBot (wheel encoders, planar LiDAR, Raspberry Pi 5, ROS2). Every layer was written from scratch: calibrated feedforward + PID wheel control, a rotate–translate–rotate motion controller, log-odds occupancy-grid mapping, particle-filter Monte Carlo localization, online SLAM, an obstacle-aware A* planner, frontier-based exploration, and a two-stage forklift mechanism for moving and stacking crates. Team of three with Noah Mollerstuen and Ryan Tsai.",
      approach: [
        "Motion control: calibrated each wheel's PWM-to-speed model, then compared feedforward, PID and FF+PID modes on a 0.5 m/s step; low-pass filtered encoder velocities and bounded velocity and acceleration for smooth rotate–translate–rotate waypoint following.",
        "Mapping: log-odds 2D occupancy grid updated online from LiDAR with Bresenham ray tracing, interpolating an SE(2) pose per ray to correct for robot motion during each scan.",
        "Localization: Monte Carlo localization with an odometry action model (rotational and translational noise parameters) and a ray-cast sensor model mixing a Gaussian hit term with a uniform term over a precomputed obstacle-distance grid.",
        "SLAM: closed the loop by localizing against the evolving map and then updating the map from the estimated pose on every scan, replacing drifting odometry-only maps with clean, continuous walls.",
        "Planning: A* over the occupancy grid with a BFS obstacle-distance field that inflates cost near walls, a clearance-aware heuristic, and waypoint pruning before handoff to the controller.",
        "Exploration: frontier detection by flood-fill clustering, a cost that trades travel distance against frontier size, and blacklisting of frontiers that repeatedly fail to plan.",
        "Forklift: designed a two-stage OpenBeam elevator driven by an XL-320 servo winch with 3D-printed couplers, spool and pulley cap, commanded from a ROS2 node on the Pi."
      ],
      results: [
        { value: "1st", label: "Overall in the ROB 550 BotLab competition, top score in every event" },
        { value: "< 5 cm / 15°", label: "Return-to-start error after fully autonomous exploration of an unknown maze" },
        { value: "58 s", label: "Maze navigation run time (Event 1)" },
        { value: "62 ms", label: "Particle-filter update with 1000 particles, real-time at 10 Hz" }
      ],
      stack: ["ROS2", "MBot", "Monte Carlo localization", "Occupancy-grid SLAM", "A*", "Frontier exploration", "PID", "2D LiDAR", "XL-320 servo"],
      links: []
    },
    {
      id: "ros2-manip",
      title: "RX200 Arm: Vision-Guided Pick-and-Place with Calibrated DH Kinematics",
      category: "Manipulation · Perception",
      year: "2025",
      badge: "ROB 550 ArmLab",
      summary: "Camera calibration, depth-based block detection, closed-form forward and inverse kinematics, and teach-and-repeat on a 5-DoF Interbotix RX200, sorting and stacking colored blocks autonomously.",
      media: "Block detection overlay + RX200 DH frames",
      image: "assets/armlab-block-detection.jpg",
      video: "https://youtu.be/O1v-3R6_cI0",
      gallery: [
        { src: "assets/armlab-rx200-frames.png", caption: "RX200 5-DoF arm with Denavit–Hartenberg coordinate frames assigned at each joint" },
        { src: "assets/armlab-calibration-grid.jpg", caption: "Calibration check: world grid points projected back onto the image (MSE 6.36 px, about 5 mm)" },
        { src: "assets/armlab-detection-heatmap.png", caption: "Colors correctly identified per 100 mm workspace cell, 87.9% overall" },
        { src: "assets/armlab-teach-repeat.png", caption: "End-effector trajectory over 10 teach-and-repeat cycles" }
      ],
      overview: "A complete pick-and-place system on the Interbotix RX200 5-DoF arm with an Intel RealSense L515 RGB-D camera. The pipeline chains camera calibration (intrinsics, PnP extrinsics, homography), vectorized depth-contour block detection, a Denavit–Hartenberg forward-kinematics model with calibrated joint offsets, an analytical inverse-kinematics solver, and a click-to-grab GUI. The system sorted and stacked blocks by color and size across three competition events. Team of three with Tzu-Chieh Tai and Venkatakrishnan Amruthur Kesavan.",
      approach: [
        "Calibration: intrinsics from a checkerboard with the ROS camera_calibration package (5-trial average, within 7.6% of factory values); extrinsics from AprilTag centers with cv2.solvePnP (rotation within 2° of hand measurement); a homography from four AprilTags gives a rectified top-down workspace view.",
        "Block detection: vectorized depth map, cv2.findContours on block top surfaces, cv2.minAreaRect for centroid, size and yaw; area gating rejects distractors; color by nearest-RGB match against a palette recalibrated before each run.",
        "Forward kinematics: derived the full DH table for the RX200, then tuned joint-angle offsets on joints 1 and 3 after finding that gravity sag shifts the real home pose; verified end-effector position to within the 8 mm manufacturer spec.",
        "Inverse kinematics: closed-form geometric solution in the r–z plane via the law of cosines, with elbow-up and elbow-down branches and explicit reachability tests; wrist pitch scheduled from π/2 near the base to 0 at the workspace edge to extend reach.",
        "Click-to-grab and place: inverse homography, then depth plus intrinsics, then extrinsics to recover world coordinates; three-waypoint approach, grasp and retreat motions with a ground-clearance term and a normalization press for consistent stacking.",
        "Teach-and-repeat: torque-off teaching through the GUI and 10-cycle replay, showing near-identical end-effector trajectories with only minor servo backlash near sharp turns."
      ],
      results: [
        { value: "87.9%", label: "Block color identification success across the workspace" },
        { value: "≈ 5 mm", label: "Calibration reprojection error (6.36 px MSE)" },
        { value: "≤ 8 mm", label: "Forward-kinematics position error vs ruler-measured ground truth" },
        { value: "5 blocks", label: "Stacked in rainbow order in under 180 s (Event 1)" }
      ],
      stack: ["Interbotix RX200", "RealSense L515", "OpenCV", "AprilTag", "PnP", "Homography", "Denavit–Hartenberg", "Analytical IK", "ROS", "Python"],
      links: []
    },
    {
      id: "bevunet",
      title: "BEVUNet: Camera-Only BEV Occupancy Under Adverse Weather",
      category: "Perception · Autonomous Driving",
      year: "2025–2026",
      badge: "ROB 535 · CARLA",
      summary: "A lightweight six-camera bird's-eye-view occupancy network trained with weak supervision in CARLA, with weather-adaptive thresholds that keep recall above 0.95 in clear, rainy and foggy scenes.",
      media: "CARLA weather grid + BEV occupancy predictions",
      image: "assets/bevunet-weather-grid.jpg",
      gallery: [
        { src: "assets/bevunet-pipeline.jpg", caption: "Pipeline: YOLOv8 pseudo-labels per view, multi-view fusion, BEVUNet training, weather-adaptive thresholding" },
        { src: "assets/bevunet-bev-clear.jpg", caption: "Clear: front camera, pseudo ground-truth BEV, predicted probability map, binary prediction (τ = 0.55)" },
        { src: "assets/bevunet-bev-rainy.jpg", caption: "Rainy: same layout, binarized at τ = 0.45" },
        { src: "assets/bevunet-bev-foggy.jpg", caption: "Foggy: same layout, binarized at τ = 0.40" },
        { src: "assets/bevunet-loss-curve.jpg", caption: "Training and validation loss over 10 epochs" }
      ],
      overview: "Camera-only BEV occupancy estimation from six synchronized RGB cameras in a synthetic CARLA dataset covering clear, rainy and foggy weather. To avoid manual BEV annotation, YOLOv8 detections in each view are projected into a 128×128 BEV grid (60 m × 60 m) with a heuristic perspective mapping and fused across cameras as pseudo-labels. A U-Net–style encoder–decoder (BEVUNet) with shared-weight per-camera encoders and multi-view feature fusion is trained end-to-end with BCE loss, and weather-specific confidence thresholds at inference trade precision against recall as visibility degrades. Team of three with Pranav Jain and Venkatakrishnan Amruthur Kesavan.",
      approach: [
        "Built a six-camera 360° CARLA dataset in clear, rainy and foggy conditions, resized to 128×128 per view and split 4:1 per scene to avoid temporal leakage.",
        "Generated BEV pseudo-labels by running pretrained YOLOv8 per view with weather-specific confidence thresholds, mapping box centers to BEV cells with perspective priors, and taking the union across views.",
        "Designed BEVUNet: 18-channel stacked multi-view input, a 3-stage encoder (32→64→128 channels), a transposed-convolution decoder with skip connections and a 1×1 logits head; trained with Adam at 1e-4 and BCE-with-logits, keeping the best validation checkpoint over 10 epochs.",
        "Weather-adaptive inference thresholds (0.55 clear, 0.45 rainy, 0.40 foggy) suppress false positives in clean scenes while preserving recall in degraded ones.",
        "Evaluated mIoU, precision, recall and mAP per weather condition and benchmarked against PETR, PETRv2, BEVFormer, BEVDet and DA-BEV."
      ],
      results: [
        { value: "0.846", label: "BEV mAP in clear weather (0.706 rainy, 0.727 foggy)" },
        { value: "> 0.95", label: "Recall maintained across all three weather conditions" },
        { value: "0.341", label: "mIoU in clear weather, vs 0.356 for DA-BEV" },
        { value: "6 cams", label: "Camera-only: no LiDAR, no depth supervision" }
      ],
      stack: ["PyTorch", "CARLA", "YOLOv8", "U-Net", "BEV perception", "Weak supervision"],
      links: [{ label: "GitHub", href: "https://github.com/Avantikarattan6134/CARLA-PerceptionLab" }]
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
      title: "Observation Models for Differentiable Particle Filters",
      category: "State Estimation · Learning",
      year: "2025–2026",
      badge: "ROB 599",
      summary: "Benchmarked six observation-model encoders (CNN, ViT, ResNet, ResNet+LSTM, Swin, InEKF+ResNet) inside a differentiable particle filter across three maze-localization tasks on the Great Lakes HPC cluster.",
      media: "Maze navigation tasks + architecture comparison table",
      image: "assets/diffpf-rmse-comparison.png",
      gallery: [
        { src: "assets/diffpf-difficulty-scaling.png", caption: "RMSE vs task difficulty: ResNet degrades most gracefully, InEKF+ResNet fails on multimodal mazes" },
        { src: "assets/diffpf-particle-vs-kalman.png", caption: "Particle filter vs Kalman filter with the same learned encoder" },
        { src: "assets/diffpf-resnet-nav01.png", caption: "ResNet-DPF on nav01: trajectory estimates and localization error over time" },
        { src: "assets/diffpf-comparison-nav03.png", caption: "All five DPF encoders on the hardest maze (nav03)" }
      ],
      overview: "A systematic comparison of observation-model architectures within the Differentiable Particle Filter (DPF) framework of Jonschkowski et al. for robot localization from 24×24 RGB observations in maze environments of increasing difficulty (nav01 to nav03). Five DPF encoders are compared against an Invariant EKF on SE(2) that uses the same ResNet encoder, isolating the effect of the encoder from the effect of the filter. Team of three with Karthik Vairavan and Saumit Vedula.",
      approach: [
        "Implemented ViT (4 blocks, 4×4 patches), ResNet-18-style (3 residual stages), ResNet + 2-layer LSTM, and 2-stage Swin Transformer encoders as drop-in observation models for the TensorFlow 1.15 / Sonnet DPF codebase.",
        "Built an InEKF+ResNet baseline on the SE(2) Lie group to test whether a Gaussian filter can match particle filtering with the same learned encoder.",
        "Trained every model on 1000 episodes × 99 timesteps per task on NVIDIA V100 and RTX PRO 6000 nodes of Great Lakes HPC, then evaluated RMSE and ATE in pixels on nav01, nav02 and nav03.",
        "Analyzed why global attention underperforms at 24×24 resolution and why LSTM temporal context is redundant given the particle propagation step; wrote up the study as an IEEE-format report."
      ],
      results: [
        { value: "ResNet", label: "Best on all three tasks: 67.5 / 104.3 / 184.4 px RMSE" },
        { value: "Up to 26%", label: "RMSE reduction vs the CNN baseline" },
        { value: "4–5×", label: "Higher error for InEKF+ResNet than particle filters: a Gaussian posterior fails on multimodal mazes" },
        { value: "6 × 3", label: "Architectures × tasks compared" }
      ],
      stack: ["TensorFlow 1.15", "Sonnet", "Differentiable PF", "InEKF", "ViT", "ResNet", "Swin", "HPC / Slurm"],
      links: [{ label: "GitHub", href: "https://github.com/Avantikarattan6134/Comparing-Observation-Models-for-Differentiable-Particle-Filters-in-Robot-Localization" }]
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
