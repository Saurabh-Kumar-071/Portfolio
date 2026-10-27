import "./ProjectVisuals.css";

/** InterviewPilot — Mock interview workspace illustration */
export default function InterviewPilotVisual() {
  return (
    <div className="pv pv--interview" aria-label="InterviewPilot interface concept illustration">
      {/* Sidebar */}
      <div className="pv-interview__sidebar">
        <div className="pv-interview__sidebar-title">Sessions</div>
        <div className="pv-interview__sidebar-item pv-interview__sidebar-item--active">
          <span className="pv-interview__dot" />
          Arrays & Hashing
        </div>
        <div className="pv-interview__sidebar-item">
          <span className="pv-interview__dot pv-interview__dot--dim" />
          Binary Search
        </div>
        <div className="pv-interview__sidebar-item">
          <span className="pv-interview__dot pv-interview__dot--dim" />
          Linked Lists
        </div>
        <div className="pv-interview__sidebar-item">
          <span className="pv-interview__dot pv-interview__dot--dim" />
          Trees & Graphs
        </div>
      </div>

      {/* Main panel */}
      <div className="pv-interview__main">
        <div className="pv-interview__header">
          <span className="pv-interview__header-label">Mock Interview</span>
          <span className="pv-interview__header-timer">
            24<span className="pv-interview__timer-colon">:</span>30
          </span>
        </div>

        <div className="pv-interview__question">
          <div className="pv-interview__q-badge">Question 3 of 5</div>
          <div className="pv-interview__q-title">Two Sum</div>
          <div className="pv-interview__q-difficulty">
            <span className="pv-interview__difficulty-tag pv-interview__difficulty-tag--easy">Easy</span>
          </div>
          <div className="pv-interview__q-desc">
            Given an array of integers <code>nums</code> and an integer <code>target</code>, return indices of the two numbers such that they add up to target.
          </div>
        </div>

        <div className="pv-interview__editor-hint">
          <div className="pv-interview__editor-bar">
            <span className="pv-interview__lang-tag">C++</span>
            <span className="pv-interview__lang-tag pv-interview__lang-tag--dim">Python</span>
            <span className="pv-interview__lang-tag pv-interview__lang-tag--dim">Java</span>
          </div>
          <div className="pv-interview__code-lines">
            <span className="pv-interview__code-ln">1</span>
            <span className="pv-interview__code-text"><span className="code-keyword">class</span> Solution {"{"}</span>
          </div>
          <div className="pv-interview__code-lines">
            <span className="pv-interview__code-ln">2</span>
            <span className="pv-interview__code-text"><span className="code-keyword">public</span>:</span>
          </div>
          <div className="pv-interview__code-lines">
            <span className="pv-interview__code-ln">3</span>
            <span className="pv-interview__code-text">  vector&lt;int&gt; <span className="code-function">twoSum</span>(...) {"{"}</span>
          </div>
          <div className="pv-interview__code-lines">
            <span className="pv-interview__code-ln">4</span>
            <span className="pv-interview__code-text">    <span className="code-comment">// your solution</span></span>
          </div>
        </div>

        <div className="pv-interview__footer">
          <span className="pv-interview__progress-label">Progress</span>
          <div className="pv-interview__progress-bar">
            <div className="pv-interview__progress-fill" style={{ width: "60%" }} />
          </div>
        </div>
      </div>
    </div>
  );
}
