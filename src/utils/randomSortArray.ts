export default function randomSortArray(array: any): [] {
  const arrayCopy = array;

  for (
    let shuffulingIndex = arrayCopy.length - 1;
    shuffulingIndex > 0;
    shuffulingIndex -= 1
  ) {
    const nonShuffledIndex = Math.floor(Math.random() * (shuffulingIndex + 1));
    [arrayCopy[shuffulingIndex], arrayCopy[nonShuffledIndex]] = [
      arrayCopy[nonShuffledIndex],
      arrayCopy[shuffulingIndex],
    ];
  }

  return arrayCopy;
}
