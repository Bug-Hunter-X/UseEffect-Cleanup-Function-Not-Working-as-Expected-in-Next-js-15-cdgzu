# Next.js 15 useEffect Cleanup Issue

This repository demonstrates a problem with the `useEffect` hook's cleanup function in a Next.js 15 application. The counter on the '/about' page continues to increment even after navigating away from the page and returning, indicating the `setInterval` is not being cleared properly. 

## Bug Description

A simple counter is implemented using `useState` and `useEffect` with `setInterval` to update the counter every second. The `useEffect` hook includes a cleanup function to clear the interval when the component unmounts. However, the counter keeps incrementing, suggesting the cleanup function is not correctly stopping the interval.

## Steps to Reproduce
1. Clone the repository.
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`
4. Navigate to '/about'.
5. Navigate away from '/about' and then back to '/about'. Observe that the counter continues to increment from where it left off.

## Solution
The solution addresses the issue by ensuring the interval is properly cleared.  The original code contained a potential issue that this solution avoids.