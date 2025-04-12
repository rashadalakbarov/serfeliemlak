type Props = {
    timestamp: number;
  };
  
  const formatDate = (timestamp: number): string => {
    const now = new Date();
    const date = new Date(timestamp);
  
    // Saat
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const time = `${hours}:${minutes}`;
  
    // Bugün kontrolü
    const isToday = now.toDateString() === date.toDateString();
  
    // Dün kontrolü
    const yesterday = new Date();
    yesterday.setDate(now.getDate() - 1);
    const isYesterday = yesterday.toDateString() === date.toDateString();
  
    if (isToday) {
      return `Bugün, ${time}`;
    } else if (isYesterday) {
      return `Dünən, ${time}`;
    } else {
      const day = date.getDate().toString().padStart(2, "0");
      const month = (date.getMonth() + 1).toString().padStart(2, "0");
      const year = date.getFullYear();
      return `${day}.${month}.${year}`;
    }
  };
  
  const FormattedTime = ({ timestamp }: Props) => {
    return <span>{formatDate(timestamp)}</span>;
  };
  
  export default FormattedTime;
  