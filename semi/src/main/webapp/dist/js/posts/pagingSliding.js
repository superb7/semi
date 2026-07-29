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
  - 화면에 표시할 페이지를 중앙에 출력
	currentPage : 화면에 표시할 페이지
	totalPage : 전체 페이지 수
	url : 링크를 설정할 url
*/
function pagingUrl(currentPage, totalPage, url, blockSize = 10) {
    let result = '';
    
    try {
		let current = Math.max(1, Number(currentPage) || 1);
		let total = Math.max(1, Number(totalPage) || 1);

		if (current > total) current = total;

		let startPage = Math.max(1, current - Math.floor(blockSize / 2));

		if (startPage + blockSize > total) {
			startPage = Math.max(1, total - blockSize + 1);
		}
        
        url += url.includes('?') ? '&' : '?';
		        
        result = '<div class="paginate">';
        
        // 처음페이지
        if (startPage > 1) {
        	result += `<a href="${url}page=1" title="처음">&#x226A</a>`;
        }

        // 이전(한페이지 전)
        if (current > 1) {
        	result += `<a href="${url}page=${current - 1}" title="이전">&#x003C</a>`;
        }
        
        for (let i = startPage; i < startPage + blockSize && i <= total; i++) {
            if (i === current) {
            	result += `<span>${i}</span>`;
            } else {
            	result += `<a href="${url}page=${i}">${i}</a>`;
            }
        }
        
        // 다음(한페이지 다음)
        if (current < total) {
        	result += `<a href="${url}page=${current + 1}" title="다음">&#x003E</a>`;
        }
        
        // 마지막페이지
		const lastPage = startPage + blockSize - 1;
		if (lastPage < total) {
        	result += `<a href="${url}page=${total}" title="마지막">&#x226B</a>`;
        }
        
        result += '</div>';

    } catch (e) {
    }
	
    return result;
}

/*
  - 화면에 표시할 페이지를 중앙에 출력
	currentPage : 화면에 표시할 페이지
	totalPage : 전체 페이지 수
	methodName : 호출할 메소드 명
*/
function pagingMethod(currentPage, totalPage, methodName, blockSize = 10) {
    let result = '';
    
    try {
		let current = Math.max(1, Number(currentPage) || 1);
		let total = Math.max(1, Number(totalPage) || 1);

		if (current > total) current = total;

		let startPage = Math.max(1, current - Math.floor(blockSize / 2));

		if (startPage + blockSize > total) {
			startPage = Math.max(1, total - blockSize + 1);
		}
        
        result = '<div class="paginate">';
        
        // 처음페이지
        if (startPage > 1) {
        	result += `<a href="javascript:void(0);" onclick="${methodName}(1);" title="처음">&#x226A</a>`;
        }

        // 이전(한페이지 전)
		if (current > 1) {
        	result += `<a href="javascript:void(0);" onclick="${methodName}(${current - 1});" title="이전">&#x003C</a>`;
        }
        
        for (let i = startPage; i < startPage + blockSize && i <= total; i++) {
            if (i === current) {
            	result += `<span>${i}</span>`;
            } else {
            	result += `<a href="javascript:void(0);" onclick="${methodName}(${i});">${i}</a>`;
            }
        }
        
        // 다음(한페이지 다음)
        if (current < total) {
        	result += `<a href="javascript:void(0);" onclick="${methodName}(${current + 1});" title="다음">&#x003E</a>`;
        }

        // 마지막페이지
		const lastPage = startPage + blockSize - 1;
		if (lastPage < total) {
        	result += `<a href="javascript:void(0);" onclick="${methodName}(${total});" title="마지막">&#x226B</a>`;
        }
        
        result += '</div>';
    	
    } catch (e) {
    }
    
    return result;
}
