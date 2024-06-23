import commentGenerator from '@/features/comments/comment-generator';

const Auth = () => {
  const result = commentGenerator('sds');
  console.log(result);
  return <div>Auth</div>;
};

export default Auth;
