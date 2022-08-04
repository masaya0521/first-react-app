// propsの例

const Text1 = (props: { content: string }) => {
  //ここのpropsから取り出すのはおまじないで良さそう
  const { content } = props;
  return <p className="text">{content}</p>;
};

const Message = (props: {}) => {
  const content1 = "this is component1";
  const content2 = "this is component2";

  return (
    <div>
      <Text1 content={content1} />
      <Text1 content={content2} />
    </div>
  );
};

export default Message;
