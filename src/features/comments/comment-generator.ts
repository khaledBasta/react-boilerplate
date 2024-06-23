const commentGenerator = (comment: string) => {
  return {
    id: Math.random(),
    comment,
  };
};

export default commentGenerator;
