// 페이지 로드 완료 시 실행
document.addEventListener('DOMContentLoaded', function() {
    
    // 입력 필드 상호작용 기능
    const inputs = document.querySelectorAll('input[readonly]');
    
    inputs.forEach(input => {
        input.addEventListener('click', function() {
            if (this.placeholder === '체크인') {
                this.type = 'date';
                this.removeAttribute('readonly');
                this.focus();
            } else if (this.placeholder === '인원') {
                this.type = 'number';
                this.min = '1';
                this.max = '10';
                this.value = '1';
                this.removeAttribute('readonly');
                this.focus();
            } else if (this.placeholder === '객실') {
                this.type = 'number';
                this.min = '1';
                this.max = '5';
                this.value = '1';
                this.removeAttribute('readonly');
                this.focus();
            }
        });
    });

    // 검색 버튼 기능
    const searchBtn = document.querySelector('.search-btn');
    searchBtn.addEventListener('click', function() {
        // 입력값 검증
        const checkinInput = document.querySelector('input[placeholder="체크인"]');
        const peopleInput = document.querySelector('input[placeholder="인원"]');
        const roomInput = document.querySelector('input[placeholder="객실"]');
        
        if (!checkinInput.value) {
            alert('체크인 날짜를 선택해주세요.');
            checkinInput.click();
            return;
        }
        
        if (!peopleInput.value) {
            alert('인원수를 입력해주세요.');
            peopleInput.click();
            return;
        }
        
        if (!roomInput.value) {
            alert('객실 수를 입력해주세요.');
            roomInput.click();
            return;
        }
        
        // 검색 결과 시뮬레이션
        const searchData = {
            checkin: checkinInput.value,
            people: peopleInput.value,
            room: roomInput.value,
            location1: document.querySelectorAll('select')[0].value,
            location2: document.querySelectorAll('select')[1].value,
            type: document.querySelectorAll('select')[2].value
        };
        
        console.log('검색 데이터:', searchData);
        
        // 실제로는 서버로 데이터를 전송하겠지만, 여기서는 알림으로 대체
        alert(`검색 조건:\n체크인: ${searchData.checkin}\n인원: ${searchData.people}명\n객실: ${searchData.room}개\n지역: ${searchData.location1}, ${searchData.location2}\n숙박유형: ${searchData.type}`);
    });

    // 도움말 아이콘 기능
    const helpIcon = document.querySelector('.help-icon');
    helpIcon.addEventListener('click', function(e) {
        e.stopPropagation(); // 버튼 클릭 이벤트 방지
        
        const helpText = `
숙박권 통합검색 도움말:

• 체크인: 숙박 시작 날짜를 선택하세요
• 인원: 총 이용 인원수를 입력하세요
• 객실: 필요한 객실 수를 입력하세요
• 지역: 원하는 숙박 지역을 선택하세요
• 숙박유형: 펜션, 호텔, 모텔 중 선택하세요

모든 항목을 입력하신 후 검색 버튼을 클릭하세요!
        `;
        
        alert(helpText);
    });

    // 네비게이션 메뉴 호버 효과
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // 헤더 아이콘 클릭 이벤트
    const headerIcons = document.querySelectorAll('.header-icon');
    headerIcons.forEach((icon, index) => {
        icon.addEventListener('click', function() {
            const iconNames = ['검색', '언어설정', '로그인', '메뉴'];
            alert(`${iconNames[index]} 기능입니다.`);
        });
    });

    // 스크롤 이벤트 - 헤더 그림자 효과
    let lastScrollY = window.scrollY;
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.15)';
        } else {
            header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        }
        
        lastScrollY = window.scrollY;
    });

    // 폼 애니메이션 효과
    const formGroups = document.querySelectorAll('.form-group');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
            }
        });
    });

    // 초기 상태 설정 및 관찰 시작
    formGroups.forEach(group => {
        group.style.opacity = '0';
        group.style.transform = 'translateY(20px)';
        group.style.transition = 'all 0.5s ease';
        observer.observe(group);
    });
});