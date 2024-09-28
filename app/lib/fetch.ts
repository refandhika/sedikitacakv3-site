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

export async function fetchBlogList(page: number = 1, limit: number = 20, cat: string = "", search: string = "") {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/pub/posts/active?page=${page}&limit=${limit}&cat=${cat}&search=${search}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      });
  
      if (!response.ok) {
        console.error(`Failed to fetch blog data: ${response.statusText}`);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching blog data from API:', error);
    }
}

export async function fetchArticleByID(slug: string = "") {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/pub/post/${slug}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    });

    if (!response.ok) {
      console.error(`Failed to fetch blog data: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching blog data from API:', error);
  }
}

export async function fetchProjectList(page: number = 1, limit: number = 20, rlv: boolean = true) {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/pub/projects/active?page=${page}&limit=${limit}&rlv=${rlv}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    });

    if (!response.ok) {
      console.error(`Failed to fetch projects data: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching projects data from API:', error);
  }
}

export async function fetchHobbyList(page: number = 1, limit: number = 20, search: string = "") {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/pub/hobbies/active?page=${page}&limit=${limit}&search=${search}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    });

    if (!response.ok) {
      console.error(`Failed to fetch hobbies data: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching hobbies data from API:', error);
  }
}