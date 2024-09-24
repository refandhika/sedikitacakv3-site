export async function fetchSettingByParam(param: string) {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/pub/setting/${param}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      });
  
      if (!response.ok) {
        console.error(`Failed to fetch setting ${param} data: ${response.statusText}`);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching setting '+ param +' data from API:', error);
    }
}