import type { Component } from 'solid-js';
import ProjectPageBase, { ProjectContentSection } from '../ProjectPageBase';
import projectList from '../../../common/projectList';
import useProjectIndex from '../useProjectIndex';
import Media from '../Media';

const CamSurSystemPage: Component = () => {
  const projectIndex = useProjectIndex();

  return (
    <ProjectPageBase projectIndex={projectIndex}>
      <ProjectContentSection>
        <p>
          This is a camera surveillance system that uses AI for detecting people on the screen and alerting the user. This project was presented as my college final year project.
        </p>
        <p>
          The objective is to increase home security using only software and a spare computer for gathering the images and processing the AI model.
        </p>
        <Media src={'/src/assets/project_previews/'
          + projectList[projectIndex].videoFileName} />
      </ProjectContentSection>
      <ProjectContentSection title='Triggers'>
        <p>
          The trigger system allows users to create triggers that are fired when certain conditions are met, which includes: a person being detected in an area drawn by the user, time of the day, and the maximum amount of time the detection spends inside the area. When it fires, it sends a notification or sound an alarm on the user's phone.
        </p>
        <Media src="/src/assets/camera_surveillance_system/Interface_Triggers_Manager.jpg" />
      </ProjectContentSection>
      <ProjectContentSection title='Windows Application'>
        <p>
          The windows application functions as an interface for the user, and a server for the Android app.
        </p>
        <p>
          The idea was to use only one programming language to execute the idea as quickly as possible, and since Python was chosen for OpenCV, the interface was made using PyQt5 - a Python wrapper for Qt5.
        </p>
        <Media src="/src/assets/camera_surveillance_system/Interface_Home.jpg" />
      </ProjectContentSection>
      <ProjectContentSection title='Android Application'>
        <p>
          The Android application's purpose is to provide a quick and mobile way to check the cameras and receive the notifications from the detections.
        </p>
        <p>
          To make this app, I decided to use Flutter, which was way quicker to learn than PyQt5, and its programming language (Dart) was pretty easy to learn too.
        </p>
        <Media src="/src/assets/camera_surveillance_system/Interfaces_Android.jpg" />
      </ProjectContentSection>
      <ProjectContentSection title='Future Improvements'>
        <ul>
          <li>
            Make optimizations on the image processing, for example, only use person detection when movement is detected
          </li>
          <li>
            Allow for more cameras to be connected
          </li>
          <li>
            Improve the communication with the mobile app
          </li>
        </ul>
      </ProjectContentSection>
    </ProjectPageBase>
  );
}

export default CamSurSystemPage;