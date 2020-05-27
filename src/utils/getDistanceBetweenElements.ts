interface ElementPosition {
  x: number;
  y: number;
}

function getPositionAtCenter(id: string): ElementPosition {
  const element = document.getElementById(id);
  if (element) {
    const { top, left, width, height } = element.getBoundingClientRect();
    return {
      x: left + width / 2,
      y: top + height / 2,
    };
  }
  return {
    x: 0,
    y: 0,
  };
}

export default function getDistanceBetweenElements(
  elementA: string,
  elementB: string,
): number {
  const aPosition = getPositionAtCenter(elementA);
  const bPosition = getPositionAtCenter(elementB);

  return bPosition.x - aPosition.x;
}
