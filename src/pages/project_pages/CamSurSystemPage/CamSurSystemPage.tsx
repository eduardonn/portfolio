import type { Component } from 'solid-js';
import ProjectPageBase, { ProjectContentSection, ProjectMainTitle, ProjectSubHeader1 } from '../ProjectPageBase';
import projectsList from '../../../globals/projectsList';
import useProjectIndex from '../useProjectIndex';

const CamSurSystemPage: Component = () => {
  const projectIndex = useProjectIndex();

  return (
    <ProjectPageBase projectIndex={projectIndex}>
      <ProjectMainTitle>{projectsList[projectIndex].title}</ProjectMainTitle>
      <ProjectContentSection>
        <p>
          This is a camera surveillance system that uses AI for detecting people on the screen and alerting the user. This project was presented as my college's final project. The objective is to increase home security using only software and a spare computer for processing the AI.
        </p>
        <ProjectSubHeader1>Triggers</ProjectSubHeader1>
        <p>
          The trigger system allows users to create triggers that are fired when certain conditions are met, which includes: a person being detected in an area drawn by the user, time of the day, and the maximum amount of time the detection spends inside the area. When it fires, it sends a notification or sound an alarm on the user's phone.
        </p>
        <ProjectSubHeader1>Windows Application</ProjectSubHeader1>
        <p>
          The windows app functions as an interface for the user, and a server for the Android app.
        </p>
        <p>
          The idea was to use only one programming language to execute the idea as quickly as possible, and since Python was chosen for OpenCV, the interface was made using PyQt5 - a Python wrapper for Qt5.
        </p>
        <ProjectSubHeader1>Android Application</ProjectSubHeader1>
        <p>
          The Android application's purpose is to provide a quick and mobile way to check the cameras and receive the notifications from the detections.
        </p>
        <p>
          To make this app I decided to use Flutter, which was way quicker to learn than PyQt5, and its programming language: Dart, which is really similar to C# and was pretty easy to learn too.
        </p>
      </ProjectContentSection>
    </ProjectPageBase>
  );
}

export default CamSurSystemPage;