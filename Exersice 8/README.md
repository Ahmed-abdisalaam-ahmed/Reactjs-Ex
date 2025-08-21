### **Challenge 3: Countdown Timer**

1. Create a **`Countdown`** component that:
    - Has an input where the user specifies the number of seconds to count down from (e.g., `30`).
    - Displays the remaining time.
    - Has a **Start** button to begin the countdown.
    - Has a **Stop** button to pause the countdown.
    - Has a **Reset** button to reset to the original input value.
2. Use **`useEffect`** to set up an interval **only when** the timer is running.
3. Clear the interval when the timer stops or the component unmounts.