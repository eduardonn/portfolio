const animatedComponentsList = new Set<HTMLElement>();

const addAnimatedComponent = (component: HTMLElement) => {
  animatedComponentsList.add(component);
}

const addAnimatedComponents = (componentArray: Array<HTMLElement>) => {
  componentArray.forEach(component => animatedComponentsList.add(component));
}

const deleteAnimatedComponent = (component: HTMLElement) => {
  animatedComponentsList.delete(component);
}

const deleteAnimatedComponents = (componentArray: Array<HTMLElement>) => {
  componentArray.forEach(component => animatedComponentsList.delete(component));
}

const replayAnimations = () => {
  animatedComponentsList.forEach(component => {
    component.style.animation = 'none';
    component.offsetHeight; // Trigger reflow to apply the change
  });
  
  // @ts-ignore
  animatedComponentsList.forEach(component => component.style.animation = null);
}

export {
  animatedComponentsList,
  addAnimatedComponent,
  addAnimatedComponents,
  deleteAnimatedComponent,
  deleteAnimatedComponents,
  replayAnimations,
};