**Who:** Just me

**What:** Raytracer program that renders 3D scenes with lighting and textures

**When:** October 2021

**Where:** Brown University's CSCI 1230 Computer Graphics course

**Why:**

- Understand offline rendering pipeline
- Solidify graphics concepts such as illumination calculations, UV mapping, matrix transformations, and virtual cameras
- Improve C++ skills

  

**How:**
Built entirely in C++ using QtCreator

**Can I try it?**
As this was an academic project using course stencil code, the repository is private but can be shared upon request.

![raytracer project thumbnail](../../assets/projects/raytracer/thumbnail.png)

I created this raytracer as a project for my Intro to Computer Graphics class in the 2021 fall semester. The project was programmed entirely in C++ in QtCreator.

Scenes are constructed of implicit primitives (cubes, spheres, cylinders, and cones) that can be transformed and placed (along with other scene components such as lights and the camera) using XML scenefiles that are parsed and turned into scene graphs.

Features:
- Full Phong illumination model including specular highlights
- Recursively raytraced reflections
- Cast shadows
- Light attenuation
- UV texture mapping


Sample images produced by my raytracer:

![all shapes simple scene](../../assets/projects/raytracer/allshapes.png)
![chess scene](../../assets/projects/raytracer/chess_lars.png)
![mirror shapes scene](../../assets/projects/raytracer/mirror_refl.png)
![cheese shadow scene](../../assets/projects/raytracer/shadow_test.png)
![sphere texture scene](../../assets/projects/raytracer/texture_sphere.png)