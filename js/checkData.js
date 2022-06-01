const checkDataJson = (data) => {
  try {
    if (data) {
      return data;
    }
    return '';
  } catch (error) {
    return '';
  }
};

export { checkDataJson };
