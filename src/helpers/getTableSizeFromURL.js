const urlSearchParams = new URLSearchParams(window.location.search);

const getTableSizeFromURL = () => ({
    width: urlSearchParams.has('width') ? Number(urlSearchParams.get('width')) : 0,
    height: urlSearchParams.has('height') ? Number(urlSearchParams.get('height')) : 0,
});

export default getTableSizeFromURL;
