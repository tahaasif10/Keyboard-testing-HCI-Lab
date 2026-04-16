# Keyboard Response Lab (HCI)

A professional Human-Computer Interaction (HCI) experiment designed to measure **Choice Reaction Time**. This lab evaluates cognitive processing speed by requiring users to categorize stimuli (Letters vs. Numbers) and execute the correct motor response.

## 🚀 Overview
This experiment implements a refined "Human Information Processing Loop." The system measures the time delta between stimulus presentation and the user's keystroke, providing quantitative data for HCI analysis.

## 🛠 Features
- **Choice Reaction Time Model**: Differentiation between alphanumeric categories.
- **Real-time Metrics**: Immediate feedback on individual and average reaction times.
- **Minimalist Design**: High-contrast interface to reduce cognitive noise and focus on performance.

## 🧪 Experimental Design

### A. Perception (Stimulus Identification)
The system presents a random character in a high-visibility box. 
- **Goal**: Rapidly identify whether the stimulus is a **Letter [A-Z]** or a **Number [0-9]**. 

### B. Decision (Response Selection)
Once identified, the user must map the stimulus to a specific key:
- **Letter** → Press **'A'**
- **Number** → Press **'N'**

This implements a "Choice Reaction Time" model, where the complexity of the response selection stage impacts the total reaction time.

## 📊 Quantitative Analysis

The lab calculates two primary metrics:
1. **Reaction Time**: The time delta for the current trial (milliseconds).
2. **Average Reaction Time**: Cumulative performance over all trials.

| Stimulus Type | Response Key | HCI Stage |
| :--- | :--- | :--- |
| Alphabetical | **'A'** | Match-to-Key |
| Numerical | **'N'** | Match-to-Key |

### Response Logic Implementation
```javascript
document.addEventListener("keydown", function (event) {
    if (currentType === "letter" && event.key.toLowerCase() === "a") {
        // Log Success & Complete Trial
        let reactionTime = new Date().getTime() - startTime;
        updateResults(reactionTime);
    }
});
```

## 🎨 Design System
The UI is optimized for peak readability and minimal distraction:
- **Background**: Soft slate color (`#f0f4f8`) to reduce eye strain.
- **Typography**: Heavy weight (900) for the stimulus to ensure instant recognition.
- **Visual Feedback**: Real-time results badge for immediate performance awareness.

## 💡 HCI Reflection
Through this experiment, we observe the **Human Information Processing Loop**. Results typically show that reaction times stabilize as the user develops "Muscle Memory" (procedural knowledge), effectively reducing the cognitive load of the Decision stage.

## 🛠 Getting Started
1. Open `index.html` in any modern web browser.
2. Click the **Start** button.
3. Categorize the appearing characters as quickly as possible!
