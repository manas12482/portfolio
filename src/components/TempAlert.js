import React from 'react'

const TempAlert = () => {
  return (
		<div>
			<div class='max-w-xl w-full p-8 bg-white rounded-lg shadow-md md:hidden'>
				<div class='md:hidden bg-yellow-200 p-4 rounded-md text-yellow-800'>
					<p class='font-semibold'>Alert:</p>
					<p>The Website is Currently in Developmental Stage. Hence, it&apos;s not responsive for mobile devices and may break. To view on mobile Devices kindly Switch on Desktop mode or device to Tablet or Laptop Devices </p>
				</div>
			</div>
		</div>
	);
}

export default TempAlert
