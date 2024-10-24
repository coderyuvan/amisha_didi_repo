document.addEventListener('DOMContentLoaded', function () {
    // Ensure that combinedContainer is properly selected
    const combinedContainer = document.querySelector('.combined-container');
  
    if (!combinedContainer) {
      console.error('Error: The container .combined-container does not exist.');
      return;
    }
  
    // Function to create a new SWR Group div with + and - buttons
    function createSWRGroup() {
      // Create a new SWR Group container
      const swrGroup = document.createElement('div');
      swrGroup.className = 'swr-group';
  
      // Create and set up the header with + and - buttons
      const swrHeader = document.createElement('div');
      swrHeader.className = 'fid-header';
  
      const swrTitle = document.createElement('h3');
      swrTitle.textContent = 'SWR Group';
  
      const actionButtons = document.createElement('div');
      actionButtons.className = 'action-buttons';
  
      // Create + button
      const addButton = document.createElement('button');
      addButton.className = 'icon-btn';
      addButton.textContent = '+';
      addButton.addEventListener('click', () => addSWRGroup(swrGroup));
  
      // Create - button
      const removeButton = document.createElement('button');
      removeButton.className = 'icon-btn';
      removeButton.textContent = '-';
      removeButton.addEventListener('click', () => removeSWRGroup(swrGroup));
  
      actionButtons.appendChild(addButton);
      actionButtons.appendChild(removeButton);
  
      swrHeader.appendChild(swrTitle);
      swrHeader.appendChild(actionButtons);
  
      // Create SWR content area
      const swrList = document.createElement('div');
      swrList.className = 'swr-list';
  
      // Add header and content area to the SWR Group container
      swrGroup.appendChild(swrHeader);
      swrGroup.appendChild(swrList);
  
      // Add the new SWR Group container to the main combined container
      combinedContainer.appendChild(swrGroup);
  
      // Update all SWR Groups to fit the new layout
      updateSWRGroupSizes();
    }
  
    // Function to add a new SWR Group
    function addSWRGroup(swrGroup) {
      createSWRGroup();
    }
  
    // Function to remove an SWR Group
    function removeSWRGroup(swrGroup) {
      if (combinedContainer.childElementCount > 1) {
        combinedContainer.removeChild(swrGroup);
        updateSWRGroupSizes();
      }
    }
  
    // Function to update the size of all SWR Groups based on the current count
    function updateSWRGroupSizes() {
      const swrGroups = document.querySelectorAll('.swr-group');
      const totalGroups = swrGroups.length;
      const newHeight = `${100 / totalGroups}%`;
  
      swrGroups.forEach((group) => {
        group.style.flex = `1 1 ${newHeight}`;
        group.style.marginBottom = '10px';
      });
    }
  
    // Initialize the first SWR Group
    createSWRGroup();
  });
  