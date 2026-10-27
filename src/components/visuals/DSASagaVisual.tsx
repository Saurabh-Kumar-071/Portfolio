import "./ProjectVisuals.css";

/** DSASaga — Code editor workspace illustration */
export default function DSASagaVisual() {
  return (
    <div className="pv pv--dsa" aria-label="DSASaga code editor interface concept illustration">
      {/* Problem sidebar */}
      <div className="pv-dsa__sidebar">
        <div className="pv-dsa__sidebar-title">Problems</div>
        <div className="pv-dsa__problem-item pv-dsa__problem-item--active">
          <span className="pv-dsa__problem-num">#1</span>
          <span className="pv-dsa__problem-name">Two Sum</span>
          <span className="pv-dsa__problem-diff pv-dsa__diff--easy">E</span>
        </div>
        <div className="pv-dsa__problem-item">
          <span className="pv-dsa__problem-num">#2</span>
          <span className="pv-dsa__problem-name">Valid Parens</span>
          <span className="pv-dsa__problem-diff pv-dsa__diff--easy">E</span>
        </div>
        <div className="pv-dsa__problem-item">
          <span className="pv-dsa__problem-num">#3</span>
          <span className="pv-dsa__problem-name">LRU Cache</span>
          <span className="pv-dsa__problem-diff pv-dsa__diff--med">M</span>
        </div>
        <div className="pv-dsa__problem-item">
          <span className="pv-dsa__problem-num">#4</span>
          <span className="pv-dsa__problem-name">Merge K Lists</span>
          <span className="pv-dsa__problem-diff pv-dsa__diff--hard">H</span>
        </div>
      </div>

      {/* Main workspace */}
      <div className="pv-dsa__main">
        {/* Problem description */}
        <div className="pv-dsa__desc">
          <div className="pv-dsa__desc-header">
            <span className="pv-dsa__desc-title">Two Sum</span>
            <span className="pv-dsa__desc-diff pv-dsa__diff--easy">Easy</span>
          </div>
          <div className="pv-dsa__desc-text">
            Given an array of integers and a target, return indices of two numbers that add up to target.
          </div>
          <div className="pv-dsa__constraint">
            <span className="pv-dsa__constraint-label">Constraint:</span> 2 ≤ nums.length ≤ 10⁴
          </div>
        </div>

        {/* Code editor */}
        <div className="pv-dsa__editor">
          <div className="pv-dsa__editor-bar">
            <span className="pv-dsa__lang-active">JavaScript</span>
            <div className="pv-dsa__editor-actions">
              <span className="pv-dsa__action-btn pv-dsa__action-btn--run">▶ Run</span>
              <span className="pv-dsa__action-btn pv-dsa__action-btn--submit">Submit</span>
            </div>
          </div>
          <div className="pv-dsa__code">
            <div className="pv-dsa__code-line">
              <span className="pv-dsa__ln">1</span>
              <span><span className="code-keyword">function</span> <span className="code-function">twoSum</span>(nums, target) {"{"}<span className="pv-dsa__cursor">|</span></span>
            </div>
            <div className="pv-dsa__code-line">
              <span className="pv-dsa__ln">2</span>
              <span>  <span className="code-keyword">const</span> map = <span className="code-keyword">new</span> Map();</span>
            </div>
            <div className="pv-dsa__code-line">
              <span className="pv-dsa__ln">3</span>
              <span>  <span className="code-keyword">for</span> (<span className="code-keyword">let</span> i = <span className="code-number">0</span>; i &lt; nums.length; i++) {"{"}</span>
            </div>
            <div className="pv-dsa__code-line">
              <span className="pv-dsa__ln">4</span>
              <span>    <span className="code-keyword">if</span> (map.has(target - nums[i]))</span>
            </div>
            <div className="pv-dsa__code-line">
              <span className="pv-dsa__ln">5</span>
              <span>      <span className="code-keyword">return</span> [map.get(...), i];</span>
            </div>
          </div>
        </div>

        {/* Test results */}
        <div className="pv-dsa__results">
          <div className="pv-dsa__results-header">Test Cases</div>
          <div className="pv-dsa__test-case">
            <span className="pv-dsa__test-label">Input:</span>
            <code>[2,7,11,15], target=9</code>
          </div>
          <div className="pv-dsa__test-case">
            <span className="pv-dsa__test-label">Expected:</span>
            <code>[0,1]</code>
          </div>
        </div>
      </div>
    </div>
  );
}
