const Card: React.FC<{
  title: string;
  content?: string;
  bulletedContent?: string[];
}> = ({ title, content, bulletedContent }) => {
  return (
    <div className="card w-180 bg-base-300 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{content && content}</p>
        <ol>
          {bulletedContent &&
            bulletedContent.map((item) => (
              <li key={bulletedContent.indexOf(item)}>{item}</li>
            ))}
        </ol>
      </div>
    </div>
  );
};

export default Card;
