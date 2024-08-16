import { useEffect, useState } from 'react';
import hej from '~/users/models/server/hej';

const Profile = () => {
  const [val, setVal] = useState<string>('Loading...');
  useEffect(() => {
    const h = async () => {
      const response = hej();
      console.log(response);
      setVal(response);
    };
    h();
  }, []);
  return <div>profile {val}</div>;
};

export default Profile;
