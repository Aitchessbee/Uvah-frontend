/// dribbble
let dribbbleLink = 'https://dribbble.com/ryanparag';

const dribbble = () => {
  let styleRules = '<style> #dribbble { position: fixed; bottom: 15px; right: 15px;width: 100px;z-index: 100; } #dribbble a, #dribbble svg { display: block; } #dribbble svg{ width: 100%;fill: rgba(0, 0, 0, 0.25);} #dribbble svg:hover circle, #dribbble svg:focus circle{ fill: #ea4c89; } #dribbble svg:hover path, #dribbble svg:focus path{ fill: #C32361; }</style>';
  let styleContainer = document.createElement('div');
  styleContainer.innerHTML = styleRules;
  document.head.appendChild(styleContainer);
  let logoHTML = `
		<a href=` + dribbbleLink + ` target="_blank">
			<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
				<rect width="32" height="32" fill="black" fill-opacity="0"/>
				<circle cx="16" cy="16" r="15.5"/>
				<rect width="32" height="32" fill="black" fill-opacity="0"/>
				<path fill-rule="evenodd" clip-rule="evenodd" d="M16 0C7.16703 0 0 7.16703 0 16C0 24.833 7.16703 32 16 32C24.8156 32 32 24.833 32 16C32 7.16703 24.8156 0 16 0ZM26.5683 7.37527C28.4772 9.70065 29.6226 12.6681 29.6573 15.8785C29.2061 15.7918 24.6941 14.872 20.1475 15.4447C20.0434 15.2191 19.9566 14.9761 19.8525 14.7332C19.5748 14.0738 19.2625 13.397 18.9501 12.7549C23.9826 10.7072 26.2733 7.75705 26.5683 7.37527ZM16 2.36009C19.4707 2.36009 22.6464 3.66161 25.0586 5.7961C24.8156 6.14317 22.7505 8.90239 17.8915 10.7245C15.6529 6.61171 13.1714 3.24512 12.7896 2.72451C13.8134 2.48156 14.8894 2.36009 16 2.36009ZM10.1866 3.64425C10.551 4.13015 12.9805 7.5141 15.2538 11.5401C8.86768 13.2408 3.22777 13.2061 2.62039 13.2061C3.50542 8.9718 6.36876 5.44902 10.1866 3.64425ZM2.32538 16.0174C2.32538 15.8785 2.32538 15.7397 2.32538 15.6009C2.9154 15.6182 9.54447 15.705 16.3644 13.6573C16.7636 14.4208 17.128 15.2017 17.4751 15.9826C17.3015 16.0347 17.1106 16.0868 16.9371 16.1388C9.89154 18.4121 6.14317 24.6247 5.8308 25.1453C3.6616 22.7332 2.32538 19.5228 2.32538 16.0174ZM16 29.6746C12.8416 29.6746 9.92625 28.5987 7.61822 26.7939C7.86117 26.2907 10.6377 20.9458 18.3427 18.256C18.3774 18.2386 18.3948 18.2386 18.4295 18.2213C20.3557 23.2017 21.1367 27.3839 21.3449 28.5813C19.6963 29.2928 17.8915 29.6746 16 29.6746ZM23.6182 27.3319C23.4794 26.4989 22.7505 22.5076 20.9631 17.5965C25.2495 16.9197 28.9978 18.0304 29.4664 18.1866C28.8764 21.987 26.6898 25.2668 23.6182 27.3319Z"/>
			</svg>
		</a>`;

  let logo = document.createElement('div');
  logo.id = 'dribbble';
  logo.innerHTML = logoHTML;

  document.body.appendChild(logo);
};
dribbble();console.clear();

const tableRow = document.querySelectorAll(".list__row");
const overlay = document.querySelector(".overlay");
const sidebar = document.querySelector(".sidebar");
const closeOverlayBtn = document.querySelector(".button--close");

const sidebarClose = () => {
  sidebar.classList.remove("is-open");
  overlay.style.opacity = 0;
  setTimeout(() => {
    overlay.classList.remove("is-open");
    overlay.style.opacity = 1;
  }, 300);
};

tableRow.forEach(tableRow => {
  tableRow.addEventListener("click", function () {
    overlay.style.opacity = 0;
    overlay.classList.add("is-open");
    sidebar.classList.add("is-open");
    setTimeout(() => {
      overlay.style.opacity = 1;
    }, 100);

    // Sidebar content
    const sidebarBody = document.querySelector(".sidebar__body");
    sidebarBody.innerHTML = '';

    const driverPlace = this.querySelector(".list__cell:nth-of-type(1) .list__value").innerHTML;
    const driverName = this.querySelector(".list__cell:nth-of-type(2) .list__value").innerHTML;
    const driverTeam = this.querySelector(".list__cell:nth-of-type(3) .list__value").innerHTML;
    const driverPoints = this.querySelector(".list__cell:nth-of-type(4) .list__value").innerHTML;
    const driverImage = this.dataset.image;
    const driverNationality = this.dataset.nationality;
    const driverDOB = this.dataset.dob;
    const driverCountry = this.dataset.country;

    const newDriver = document.createElement('div');
    newDriver.classList = 'driver';

    const driverContent = document.createElement('div');
    driverContent.classList = 'driver__content';

    const profile = document.createElement('div');
    profile.classList = 'driver__image';
    profile.style.backgroundImage = `url('${driverImage}')`;
    newDriver.appendChild(profile);

    const driverTitle = document.createElement('div');
    driverTitle.classList = 'driver__title';
    driverTitle.innerHTML = driverName;
    driverContent.appendChild(driverTitle);

    const driverInfo = document.createElement('div');
    driverInfo.innerHTML = `
		<table class="driver__table">
			<tbody>
				<tr>
					<td><small>Team</small></td>
					<td>${driverTeam}</td>
				</tr>
				<tr>
					<td><small>Nationality</small></td>
					<td><img src="https://www.countryflags.io/${driverCountry}/shiny/24.png">${driverNationality}</td>
				</tr>
				<tr>
					<td><small>Date of birth:</small></td>
					<td>${driverDOB}</td>
				</tr>
				<tr>
					<td><small>Place</small></td>
					<td>${driverPlace}</td>
				</tr>
				<tr>
					<td><small>Points</small></td>
					<td>${driverPoints}</td>
				</tr>
			</tbody>
		</table>`;
    driverContent.appendChild(driverInfo);

    newDriver.appendChild(driverContent);
    sidebarBody.appendChild(newDriver);

  });
});

closeOverlayBtn.addEventListener("click", function () {
  sidebarClose();
});

overlay.addEventListener("click", function () {
  sidebarClose();
});