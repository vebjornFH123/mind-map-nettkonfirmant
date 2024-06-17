function calculateTranslateExtent(width, height) {
  const padding = 0;
  return [
    [-padding, -padding],
    [width + padding, height + padding],
  ];
}

function calculateCenterPosition(containerWidth, containerHeight, nodeWidth, nodeHeight) {
  const centerX = (containerWidth - nodeWidth) / 2;
  const centerY = (containerHeight - nodeHeight) / 2;
  return { x: centerX, y: centerY };
}

function getRelativePosition(centerItem, otherItem, center) {
  const centerX = centerItem.x;
  const centerY = centerItem.y;
  const otherX = otherItem.x;
  const otherY = otherItem.y;

  const deltaX = otherX - centerX;
  const deltaY = otherY - centerY;

  const absDeltaX = Math.abs(deltaX);
  const absDeltaY = Math.abs(deltaY);

  if (absDeltaX > absDeltaY) {
    if (deltaX > 0) {
      return center ? "Right" : "Left";
    } else {
      return center ? "Left" : "Right";
    }
  } else {
    if (deltaY > 0) {
      return center ? "Bottom" : "Top";
    } else {
      return center ? "Top" : "Bottom";
    }
  }
}

export { calculateTranslateExtent, calculateCenterPosition, getRelativePosition };
