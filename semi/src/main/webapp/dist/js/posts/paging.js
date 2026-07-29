/*
    dataCount : 전체 데이터 개수
    pageSize : 한 페이지의 데이터 개수
 */
function pageCount(dataCount, pageSize) {
	const total = Number(dataCount) || 0;
	const size = Number(pageSize) || 0;

	if (total <= 0 || size <= 0) {
		return 0;
	}

	return Math.ceil(total / size);
}

/*
    currentPage : 화면에 표시할 페이지
    totalPage : 전체 페이지 수
    url : 링크를 설정할 url
*/
function pagingUrl(currentPage, totalPage, url, blockSize = 10) {
    let result = '';
    let n;
	
    try {
    	currentPage = Number(currentPage) || 1;
    	totalPage = Number(totalPage) || 1;
		
        if(totalPage < currentPage) { currentPage =  totalPage; }
        
        url += url.includes('?') ? '&' : '?';
        
		const currentBlock = Math.floor((currentPage - 1) / blockSize);
		const startPage = currentBlock * blockSize + 1;
		const endPage = Math.min(startPage + blockSize - 1, totalPage);
		        
        result = '<div class="paginate">';
        // 처음페이지, 이전(10페이지 전)
        n = currentPage - blockSize;
        if (currentBlock > 0) {
			result += `<a href="${url}page=1" title="처음">&#x226A</a>`;
			result += `<a href="${url}page=${n}" title="이전">&#x003C</a>`;
        }
        
        for (let i = startPage; i <= endPage; i++) {
            if(i === currentPage) {
            	result += `<span>${i}</span>`;
            } else {
            	result += `<a href="${url}page=${i}">${i}</a>`;
            }
        }
        
        // 다음(10페이지 후), 마지막페이지
		n = Math.min(currentPage + blockSize, totalPage);
        if (endPage < totalPage) {
        	result += `<a href="${url}page=${n}" title="다음">&#x003E</a>`;
        	result += `<a href="${url}page=${totalPage}" title="마지막">&#x226B</a>`;
        }
        result += '</div>';

    } catch (e) {
    }
	
    return result;
}

/*
    currentPage : 화면에 표시할 페이지
    totalPage : 전체 페이지 수
    methodName : 호출할 메소드 명
*/
function pagingMethod(currentPage, totalPage, methodName, blockSize = 10) {
    let result = '';
    let n;
    
    try {
		currentPage = Number(currentPage) || 1;
		totalPage = Number(totalPage) || 1;

		if(totalPage < currentPage) { currentPage =  totalPage; }
        
		const currentBlock = Math.floor((currentPage - 1) / blockSize);
		const startPage = currentBlock * blockSize + 1;
		const endPage = Math.min(startPage + blockSize - 1, totalPage);
		        
        result = '<div class="paginate">';
        // 처음페이지, 이전(10페이지 전)
        n = currentPage - blockSize;
        if (currentBlock > 0) {
        	result += `<a href="javascript:void(0);" onclick="${methodName}(1);" title="처음">&#x226A</a>`;
        	result += `<a href="javascript:void(0);" onclick="${methodName}(${n});" title="이전">&#x003C</a>`;
        }
        
        for (let i = startPage; i <= endPage; i++) {
            if(i === currentPage) {
            	result += `<span>${i}</span>`;
            } else {
            	result += `<a href="javascript:void(0);" onclick="${methodName}(${i});">${i}</a>`;
            }
        }
        
        // 다음(10페이지 후), 마지막페이지
        n = Math.min(currentPage + blockSize, totalPage);
        if (endPage < totalPage) {
        	result += `<a href="javascript:void(0);" onclick="${methodName}(${n});" title="다음">&#x003E</a>`;
        	result += `<a href="javascript:void(0);" onclick="${methodName}(${totalPage});" title="마지막">&#x226B</a>`;
        }
        result += '</div>';
    	
    } catch (e) {
    }
    
    return result;
}
