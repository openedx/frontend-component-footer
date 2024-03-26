import { useEffect, useState } from 'react';
import { camelCaseObject, getConfig } from '@edx/frontend-platform';
import { getHttpClient } from '@edx/frontend-platform/auth';

const useFooterLinks = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const url = `${getConfig().LMS_BASE_URL}/api/branding/v1/footer`;
      setLoading(true);
      const { data: footerLinks } = await getHttpClient().get(url, {
        headers: {
          Accept: 'application/json',
        },

      });
      const camelCasedData = camelCaseObject(footerLinks);
      setData(camelCasedData);
      setLoading(false);
    };

    fetchData();
  }, []);

  return { data, loading };
};

export default useFooterLinks;
