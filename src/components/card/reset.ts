const reset = () => {
  const resetSettings = document.querySelector('.reset-settings');

  resetSettings!.addEventListener('click', () => {
    localStorage.clear();
    // eslint-disable-next-line no-restricted-globals
    parent.location.reload();
  });
  const resetSettingsTree = document.querySelector('.reset-settings-tree');

  resetSettingsTree!.addEventListener('click', () => {
    localStorage.clear();
  });
};

export default reset;
