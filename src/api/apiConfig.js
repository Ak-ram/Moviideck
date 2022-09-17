const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '5449c8b5731bf98208facda05edf65f8',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;