# PlaywrightGenerics Class Documentation

## Overview
`PlaywrightGenerics` is a comprehensive utility class that encapsulates reusable Playwright methods for UI automation testing. It provides a single point of abstraction for common web interactions, making tests more maintainable, readable, and reducing code duplication.

## Class Structure

```typescript
class PlaywrightGenerics {
    readonly page: Page;
    constructor(p: Page) { this.page = p }
}
```

**Constructor Logic:**
- Takes a Playwright `Page` object as a parameter
- Stores it as a readonly class member
- Every method operates on this page instance
- This ensures all methods work within the context of a single page/browser tab

---

## Method Categories & Logic Explanation

### 1. TEXT INPUT METHODS
Methods for entering, clearing, and retrieving text from input elements.

#### `enterText(ele: Locator, text: string)`
**Logic:** Fills an input element with text value
```
1. Use ele.fill(text) - Playwright method that:
   - Clears the field first
   - Types the new text
   - Works reliably across all browsers
2. Best for input fields, textareas
```

#### `clearText(ele: Locator)`
**Logic:** Removes all text from an input element
```
1. Use ele.clear() - Removes all text content
2. Useful before re-entering data or resetting form fields
```

#### `getText(ele: Locator)`
**Logic:** Retrieves text content of any element
```
1. Use ele.textContent() - Gets raw text content
2. Returns: string | null (null if element has no text)
3. Useful for assertions and validation
```

#### `getInnerText(ele: Locator)`
**Logic:** Retrieves visible inner text
```
1. Use ele.innerText() - Gets visible rendered text (ignores hidden elements)
2. Returns: string (always returns string, never null)
3. Better for user-visible text validation
```

#### `typeText(ele: Locator, text: string, delay: number = 100)`
**Logic:** Types text character by character with delay
```
1. Use ele.type(text, { delay }) - Types slowly
2. Default delay: 100ms between each character
3. Simulates human typing behavior
4. Useful for testing auto-complete, real-time validation
```

---

### 2. CLICK & INTERACTION METHODS
Methods for clicking, hovering, and interacting with elements.

#### `clickElement(ele: Locator)`
**Logic:** Standard click action
```
1. Use ele.click() - Performs single click
2. Waits for element to be ready (visible, stable)
3. Scrolls to element if needed
```

#### `doubleClickElement(ele: Locator)`
**Logic:** Performs double-click action
```
1. Use ele.dblclick() - Two rapid clicks
2. Useful for: selecting text, opening file dialogs, etc.
```

#### `rightClickElement(ele: Locator)`
**Logic:** Context menu click (right-click)
```
1. Use ele.click({ button: 'right' }) - Right mouse button
2. Triggers context menu
3. Useful for testing right-click behavior
```

#### `hoverElement(ele: Locator)`
**Logic:** Mouse hover action
```
1. Use ele.hover() - Moves mouse to element
2. Triggers hover states and tooltips
3. Does not click, just moves over
```

#### `mouseDownAndUp(ele: Locator)`
**Logic:** Simulates mouse press and release
```
1. Dispatch 'mousedown' event - Mouse button pressed
2. Dispatch 'mouseup' event - Mouse button released
3. Useful for drag operations or custom mouse behaviors
```

#### `focusElement(ele: Locator)`
**Logic:** Sets keyboard focus on element
```
1. Use ele.focus() - Element receives focus
2. Triggers focus events and CSS focus styles
3. Useful for keyboard interaction testing
```

#### `pressKey(ele: Locator, key: string)`
**Logic:** Press specific key on element
```
1. Use ele.press(key) - Sends key press to focused element
2. Key examples: 'Enter', 'Escape', 'Tab', 'ArrowDown'
3. Useful for keyboard navigation testing
```

---

### 3. DROPDOWN/SELECT METHODS
Methods for selecting options from dropdown/select elements.

#### `selectByValue(ele: Locator, value: string)`
**Logic:** Select dropdown option by value attribute
```
1. Use ele.selectOption(value) - Matches option by value attribute
2. Example: <option value="USD">Dollar</option>
3. Exact value match required
```

#### `selectByLabel(ele: Locator, label: string)`
**Logic:** Select dropdown option by visible text
```
1. Use ele.selectOption({ label }) - Matches option by display text
2. Example: <option value="USD">Dollar</option> - matches "Dollar"
3. User-friendly, matches what user sees
```

#### `selectMultiple(ele: Locator, values: string[])`
**Logic:** Select multiple options in multi-select dropdown
```
1. Use ele.selectOption(array) - Selects all provided values
2. Only works with multiple select lists
3. Values array: ['opt1', 'opt2', 'opt3']
```

#### `getDropdownOptions(ele: Locator)`
**Logic:** Retrieves all available options
```
1. Find all <option> elements within select
2. Get text content of each option
3. Returns: string[] - Array of all option texts
4. Useful for validation, verifying options exist
```

#### `getSelectedValue(ele: Locator)`
**Logic:** Get currently selected option value
```
1. Use ele.inputValue() - Gets value attribute of selected option
2. Returns: string | null
3. Returns actual value, not display text
```

---

### 4. WAIT METHODS
Methods for waiting for elements and conditions.

#### `waitForElementVisible(ele: Locator, timeout: number = 5000)`
**Logic:** Wait for element to become visible
```
1. Use ele.waitFor({ state: 'visible', timeout })
2. Polls element state until visible or timeout
3. Default: 5000ms (5 seconds)
4. Throws error if timeout exceeded
5. Useful: Wait for loading overlay to disappear
```

#### `waitForElementHidden(ele: Locator, timeout: number = 5000)`
**Logic:** Wait for element to become hidden
```
1. Use ele.waitFor({ state: 'hidden', timeout })
2. Opposite of visible - waits for disappearance
3. Example: Wait for modal to close
```

#### `waitForElementEnabled(ele: Locator, timeout: number = 5000)`
**Logic:** Wait for element to be enabled (not disabled)
```
1. Use ele.waitFor({ state: 'attached', timeout }) - Element attached to DOM
2. Add 500ms buffer for element to actually become interactive
3. Useful: Wait for button to enable after form fill
```

#### `waitForTimeout(timeout: number)`
**Logic:** Static wait/sleep
```
1. Use this.page.waitForTimeout(timeout)
2. Pauses execution for specified milliseconds
3. Use sparingly - dynamic waits preferred
4. Useful: Wait for animations to complete
```

#### `waitForElementCount(locator: Locator, count: number, timeout: number = 5000)`
**Logic:** Wait for specific number of elements to appear
```
1. Get nth element (count - 1 index)
2. Wait for that element to appear
3. Example: Wait for 5 table rows to load
```

#### `waitForUrl(urlPattern: string | RegExp, timeout: number = 5000)`
**Logic:** Wait for page URL to match pattern
```
1. Use this.page.waitForURL(pattern, { timeout })
2. Pattern can be string or regex
3. Example: /orders/ or "https://example.com/orders"
4. Useful: Wait for navigation to complete
```

---

### 5. VISIBILITY & STATE CHECKS
Methods for checking element visibility and state.

#### `isElementVisible(ele: Locator)`
**Logic:** Check if element is visible on page
```
1. Use ele.isVisible() - Returns boolean
2. Checks: Element exists AND visible (not hidden by CSS)
3. Returns: true | false
4. Non-blocking check (returns immediately)
```

#### `isElementHidden(ele: Locator)`
**Logic:** Check if element is hidden
```
1. Opposite of isElementVisible()
2. Returns: !isElementVisible()
3. True if element is not visible
```

#### `isElementEnabled(ele: Locator)`
**Logic:** Check if element is enabled (not disabled)
```
1. Use ele.isEnabled() - Returns boolean
2. Checks if element is functional, not disabled
3. Works for: button, input, select, textarea
```

#### `isElementDisabled(ele: Locator)`
**Logic:** Check if element is disabled
```
1. Opposite of isElementEnabled()
2. Returns: !isElementEnabled()
```

#### `doesElementExist(ele: Locator)`
**Logic:** Check if element exists in DOM
```
1. Use ele.count() - Get number of matching elements
2. If count > 0, element exists
3. Non-blocking, fast check
```

#### `isElementChecked(ele: Locator)`
**Logic:** Check if checkbox or radio button is checked
```
1. Use ele.isChecked() - Returns boolean
2. Only works for checkbox and radio inputs
3. Returns: true | false
```

#### `checkElement(ele: Locator)` & `uncheckElement(ele: Locator)`
**Logic:** Check/uncheck checkbox
```
1. Use ele.check() - Checks checkbox if not already
2. Use ele.uncheck() - Unchecks checkbox if checked
3. Idempotent - safe to call multiple times
4. Waits for element to be ready
```

---

### 6. ATTRIBUTE METHODS
Methods for getting and setting HTML attributes.

#### `getAttribute(ele: Locator, attributeName: string)`
**Logic:** Get HTML attribute value
```
1. Use ele.getAttribute(attributeName)
2. Example: getAttribute(button, 'data-testid')
3. Returns: string | null
4. Useful: Get data attributes, aria labels, etc.
```

#### `setAttribute(ele: Locator, attributeName: string, value: string)`
**Logic:** Set HTML attribute value
```
1. Use ele.evaluate() to run JS on element
2. Execute: el.setAttribute(attr, val)
3. Pass attribute name and value as parameters
4. Modifies DOM directly
```

#### `hasAttribute(ele: Locator, attributeName: string)`
**Logic:** Check if element has attribute
```
1. Get attribute value using getAttribute()
2. Return: value !== null
3. True if attribute exists
```

#### `getClassName(ele: Locator)`
**Logic:** Get class attribute value
```
1. Use getAttribute('class')
2. Returns: string | null (comma-separated class names)
3. Example: "btn btn-primary active"
```

#### `hasClass(ele: Locator, className: string)`
**Logic:** Check if element has specific CSS class
```
1. Get class attribute using getClassName()
2. Check if className string is included
3. Returns: classes.includes(className)
4. Case-sensitive match
```

---

### 7. KEYBOARD METHODS
Methods for pressing specific keys.

#### `pressEnter(ele: Locator)` / `pressTab(ele: Locator)` / `pressEscape(ele: Locator)`
**Logic:** Press specific keyboard keys
```
1. Use ele.press(keyName) - Sends key press to element
2. Enter: Submits forms, confirms dialogs
3. Tab: Moves focus to next element
4. Escape: Closes modals, cancels operations
```

#### `selectAll(ele: Locator)`
**Logic:** Select all text (Ctrl+A)
```
1. Use ele.press('Control+A')
2. Selects all content in element
3. Works in input fields, textareas, contenteditable
```

#### `copyText(ele: Locator)` / `pasteText(ele: Locator)`
**Logic:** Clipboard operations
```
1. copyText: ele.press('Control+C') - Copy selected text
2. pasteText: ele.press('Control+V') - Paste from clipboard
3. Requires focus on element first
```

---

### 8. SCROLL METHODS
Methods for scrolling page and elements.

#### `scrollIntoView(ele: Locator)`
**Logic:** Scroll element into viewport
```
1. Use ele.scrollIntoViewIfNeeded()
2. Scrolls page so element is visible
3. No-op if already visible
4. Useful: Before clicking hidden elements
```

#### `scrollToTop()` / `scrollToBottom()`
**Logic:** Scroll page to top or bottom
```
1. scrollToTop: window.scrollTo(0, 0)
2. scrollToBottom: window.scrollTo(0, document.body.scrollHeight)
3. Uses page.evaluate() to run JS
4. Scrolls entire page, not element
```

#### `scrollBy(x: number, y: number)`
**Logic:** Scroll by specific pixels
```
1. Use window.scrollBy(x, y)
2. x: horizontal scroll (positive = right)
3. y: vertical scroll (positive = down)
4. Relative to current position
```

#### `getScrollPosition()`
**Logic:** Get current scroll coordinates
```
1. Return: { x: window.scrollX, y: window.scrollY }
2. Returns current scroll position
3. Useful: Assert scroll behavior
```

---

### 9. NAVIGATION METHODS
Methods for page navigation.

#### `navigateToUrl(url: string, waitUntil: 'load' | 'domcontentloaded' | 'networkidle' = 'load')`
**Logic:** Navigate to URL with wait condition
```
1. Use this.page.goto(url, { waitUntil })
2. waitUntil options:
   - 'load': Page fully loaded (all resources)
   - 'domcontentloaded': DOM parsed
   - 'networkidle': No network traffic for 500ms
3. Default: 'load' - safest option
```

#### `goBack()` / `goForward()`
**Logic:** Browser history navigation
```
1. goBack: this.page.goBack() - Click back button
2. goForward: this.page.goForward() - Click forward button
3. Works like browser back/forward buttons
4. Useful: Test browser navigation
```

#### `reloadPage(waitUntil: 'load' | 'domcontentloaded' | 'networkidle' = 'load')`
**Logic:** Refresh/reload current page
```
1. Use this.page.reload({ waitUntil })
2. Same as pressing F5
3. Clears caches, reloads resources
```

#### `getCurrentUrl()` / `getPageTitle()`
**Logic:** Get current URL and page title
```
1. getCurrentUrl: return this.page.url()
2. getPageTitle: return await this.page.title()
3. Useful: Assert navigation, verify page loaded
```

---

### 10. ALERT & DIALOG METHODS
Methods for handling browser dialogs and alerts.

#### `acceptAlert()` / `dismissAlert()`
**Logic:** Handle JavaScript alert/confirm dialogs
```
1. acceptAlert: Listen for dialog, click OK
   - this.page.once('dialog', dialog => dialog.accept())
2. dismissAlert: Listen for dialog, click Cancel
   - this.page.once('dialog', dialog => dialog.dismiss())
3. One-time listener setup
4. Useful: Accept confirmation dialogs
```

#### `alertHandleWithText(text: string)`
**Logic:** Input text in prompt dialog and accept
```
1. this.page.once('dialog', dialog => dialog.accept(text))
2. Accepts prompt and enters provided text
3. Example: Prompt asks for name, input provided name
```

#### `getAlertMessage()`
**Logic:** Capture alert message text
```
1. Set up listener for dialog event
2. Extract message using dialog.message()
3. Dismiss dialog
4. Return captured message
5. Useful: Assert alert content before accepting
```

---

### 11. SCREENSHOT & VISUAL METHODS
Methods for capturing screenshots.

#### `takeScreenshot(filename: string)`
**Logic:** Capture full page screenshot
```
1. Use this.page.screenshot({ path: filename, fullPage: true })
2. path: Save location (e.g., "./screenshots/login.png")
3. fullPage: true - Captures entire scrollable page
4. Useful: Visual regression testing, failure documentation
```

#### `takeElementScreenshot(ele: Locator, filename: string)`
**Logic:** Capture specific element screenshot
```
1. Use ele.screenshot({ path: filename })
2. Captures only the element bounding box
3. Useful: Verify UI components visually
```

#### `getScreenshotBuffer()`
**Logic:** Get screenshot as binary data
```
1. Use this.page.screenshot() without path
2. Returns: Uint8Array (binary data)
3. Useful: Save to database, send over API
```

---

### 12. TABLE & LIST METHODS
Methods for extracting data from tables and lists.

#### `getTableRows(tableLocator: Locator)`
**Logic:** Extract all rows from table
```
1. Get all <tr> elements from <tbody>
2. Loop through: tableLocator.locator('tbody tr').nth(i)
3. Build array of row locators
4. Returns: Locator[]
5. Useful: Iterate through table rows
```

#### `getTableCellData(rowLocator: Locator, cellIndex: number)`
**Logic:** Get text from specific table cell
```
1. Find nth <td> in row: rowLocator.locator('td').nth(cellIndex)
2. Get text content
3. Returns: string (empty if no text)
4. cellIndex: 0-based (0 = first column)
```

#### `getTableData(tableLocator: Locator)`
**Logic:** Extract entire table as 2D array
```
1. Get all rows using getTableRows()
2. For each row:
   - Get all cells
   - Extract cell text
   - Trim whitespace
   - Add to row array
3. Returns: string[][] (2D array)
4. Example: [['Name', 'Age'], ['John', '30'], ['Jane', '28']]
```

#### `getListItems(listLocator: Locator)` / `getListItemCount(listLocator: Locator)`
**Logic:** Extract list items
```
1. getListItems: Get all <li> text contents
   - Uses allTextContents() for efficiency
   - Returns: string[]
2. getListItemCount: Count <li> elements
   - Returns: number
```

---

### 13. WINDOW & POPUP METHODS
Methods for window management and popups.

#### `getWindowSize()` / `setWindowSize(width: number, height: number)`
**Logic:** Get/set viewport size
```
1. getWindowSize: Use this.page.viewportSize()
   - Returns: { width: number, height: number }
2. setWindowSize: Use this.page.setViewportSize({ width, height })
   - Changes viewport (browser window size)
3. Useful: Responsive testing, mobile simulation
```

#### `maximizeWindow()`
**Logic:** Set window to large size
```
1. Set viewport to 1920x1080
2. Simulates maximized window
3. Desktop resolution for testing
```

#### `handleNewPage()`
**Logic:** Wait for new page/popup
```
1. Use this.page.context().waitForEvent('page')
2. Waits for new page to open (target="_blank", window.open, etc.)
3. Returns: new Page instance
4. Useful: Handle popup windows
```

---

### 14. FRAME & IFRAME METHODS
Methods for working with iframes.

#### `getFrameByName(frameName: string)` / `getFrameByIndex(frameIndex: number)`
**Logic:** Get iframe reference
```
1. getFrameByName: Find <iframe name="...">
   - Returns: FrameLocator using [name="..."]
2. getFrameByIndex: Get nth iframe
   - Returns: FrameLocator using nth()
3. FrameLocator: Special locator type for frames
```

#### `switchToFrame(frameName: string)`
**Logic:** Get reference to specific frame
```
1. Calls getFrameByName()
2. Returns: FrameLocator
3. Use with frameLocator().locator() for elements inside frame
```

#### `getAllFrames()`
**Logic:** Get all iframes on page
```
1. Count total iframes: page.locator('iframe').count()
2. Loop through each index
3. Create FrameLocator for each using page.frameLocator('iframe').nth(i)
4. Returns: FrameLocator[]
5. Useful: Test frames in loop
```

---

### 15. DRAG & DROP METHODS
Methods for drag and drop operations.

#### `dragAndDrop(sourceEle: Locator, targetEle: Locator)`
**Logic:** Drag source element onto target
```
1. Use sourceEle.dragTo(targetEle)
2. High-level drag and drop
3. Playwright handles all mouse events
4. Useful: Reordering items, kanban boards
```

#### `dragByOffset(ele: Locator, x: number, y: number)`
**Logic:** Drag element by pixel offset
```
1. Hover over element: ele.hover()
2. Move mouse to starting position: page.mouse.move(1, 1)
3. Press mouse: page.mouse.down()
4. Move to target: page.mouse.move(x, y)
5. Release mouse: page.mouse.up()
6. Low-level mouse control for complex drag scenarios
```

---

### 16. FILE UPLOAD METHODS
Methods for file input handling.

#### `uploadFile(ele: Locator, filePath: string)` / `uploadMultipleFiles(ele: Locator, filePaths: string[])`
**Logic:** Select files in file input
```
1. uploadFile: ele.setInputFiles(filePath)
   - Single file upload
   - filePath: "C:/files/image.png"
2. uploadMultipleFiles: ele.setInputFiles(filePaths)
   - Multiple files: ["file1.pdf", "file2.txt"]
3. Bypasses file dialog (no UI interaction needed)
4. Useful: Testing file upload forms
```

#### `clearFileInput(ele: Locator)`
**Logic:** Clear file input
```
1. Use ele.setInputFiles([])
2. Empty array clears selection
3. Removes all selected files
```

---

### 17. JAVASCRIPT EXECUTION METHODS
Methods for executing JavaScript in page context.

#### `executeJavaScript(script: string)` / `executeJavaScriptWithParams(script: string, params: any)`
**Logic:** Run custom JavaScript
```
1. executeJavaScript: this.page.evaluate(script)
   - Runs JS and returns result
2. executeJavaScriptWithParams: this.page.evaluate(script, params)
   - Passes parameters to JS function
   - Example params: { userId: 123, name: 'John' }
3. Execute in page context (browser console)
4. Return values from JS available in test
```

#### `getElementByJS(selector: string)` / `checkElementExistsByJS(selector: string)` / `getElementCountByJS(selector: string)`
**Logic:** Query DOM using JavaScript
```
1. getElementByJS: document.querySelector(selector)
   - Returns first matching element
2. checkElementExistsByJS: !!document.querySelector(selector)
   - Returns: boolean (true if exists)
3. getElementCountByJS: document.querySelectorAll(selector).length
   - Returns: number (count of elements)
4. Useful: Complex selectors, dynamic content
```

#### `getPageSource()` / `injectCSS(css: string)` / `injectJSFile(scriptPath: string)`
**Logic:** Page content and injection
```
1. getPageSource: this.page.content()
   - Returns entire HTML as string
   - Useful: Parse HTML, verify structure
2. injectCSS: this.page.addStyleTag({content: css})
   - Adds <style> tag to page
   - Useful: Highlight elements, testing styles
3. injectJSFile: this.page.addScriptTag({path: scriptPath})
   - Adds <script> tag with external file
   - Useful: Load utility scripts for testing
```

---

### 18. COOKIE & LOCAL STORAGE METHODS
Methods for managing cookies and storage.

#### Cookie Methods
**Logic:** Browser cookie management
```
1. addCookie(name, value, options):
   - Create cookie object with name, value, url
   - Add using context.addCookies([cookie])
   - Options: domain, path, expires, secure, etc.

2. getCookie(name):
   - Get all cookies from context
   - Find cookie by name
   - Return value or undefined

3. getAllCookies():
   - Return all cookies as array
   - Each cookie: {name, value, domain, path, ...}

4. deleteCookie(name):
   - Get all cookies
   - Filter out target cookie
   - Clear all, re-add filtered cookies

5. clearAllCookies():
   - context.clearCookies() - Remove all cookies
```

#### Local Storage Methods
**Logic:** Client-side storage (persists across page reloads)
```
1. setLocalStorage(key, value):
   - Use page.evaluate() to run JS
   - Execute: localStorage.setItem(key, value)
   - Stores string key-value pairs

2. getLocalStorage(key):
   - Use page.evaluate() with JS
   - Execute: localStorage.getItem(key)
   - Returns: string | null

3. clearLocalStorage():
   - localStorage.clear() - Remove all items
```

#### Session Storage Methods
**Logic:** Session-only storage (clears when tab closes)
```
1. setSessionStorage(key, value):
   - Similar to localStorage but session-scoped
   - sessionStorage.setItem(key, value)

2. getSessionStorage(key):
   - sessionStorage.getItem(key)
   - Returns: string | null

3. clearSessionStorage():
   - sessionStorage.clear()
```

---

### 19. VALIDATION & ASSERTION HELPER METHODS
Methods for test assertions and validation.

#### `validateText(ele: Locator, expectedText: string)`
**Logic:** Check if element contains text
```
1. Get element text using getText()
2. Use includes() for partial match
3. Returns: boolean (true if text found)
4. Example: validateText(h1, 'Welcome') → true
```

#### `validateValue(ele: Locator, expectedValue: string)`
**Logic:** Check if input value matches
```
1. Get input value using ele.inputValue()
2. Exact match (===) comparison
3. Returns: boolean (true if matches)
4. Example: validateValue(emailInput, 'test@example.com')
```

#### `countElements(locator: Locator)` / `getMultipleElementsText(locator: Locator)`
**Logic:** Get multiple element data
```
1. countElements: locator.count()
   - Returns: number of matching elements
   
2. getMultipleElementsText: locator.allTextContents()
   - Returns: string[] (all element texts)
   - Efficient for querying multiple elements
```

---

### 20. PERFORMANCE & DEBUG METHODS
Methods for logging and debugging.

#### `log(message: string)`
**Logic:** Console logging utility
```
1. console.log with prefix: "[Playwright] message"
2. Useful: Track test execution
3. Shows in console output and test logs
```

#### `logPageErrors()` / `getConsoleLogs()`
**Logic:** Capture browser logs
```
1. logPageErrors:
   - Listen for page errors
   - page.on('pageerror', error => console.error(...))
   - Logs JavaScript errors from page

2. getConsoleLogs:
   - Listen for console messages
   - page.on('console', msg => console.log(...))
   - Captures all console output (log, warn, error, etc.)
```

#### `pause()`
**Logic:** Debugger pause
```
1. Use page.pause()
2. Pauses execution for debugging
3. Opens Playwright Inspector
4. Useful: Interactive debugging during test
```

#### `closePage()`
**Logic:** Close browser page
```
1. Use page.close()
2. Closes current tab/page
3. Releases resources
4. Useful: Cleanup after test completion
```

---

## Usage Examples

### Example 1: Login Test
```typescript
import { test, expect } from '@playwright/test';
import PlaywrightGenerics from './utills/PlaywrightGenerics';

test('User Login', async ({ page }) => {
  const helper = new PlaywrightGenerics(page);
  
  // Navigate and fill form
  await helper.navigateToUrl('https://app.example.com/login');
  await helper.enterText(page.locator('#email'), 'user@example.com');
  await helper.enterText(page.locator('#password'), 'password123');
  
  // Submit and wait
  await helper.clickElement(page.locator('button[type="submit"]'));
  await helper.waitForUrl(/dashboard/);
  
  // Verify
  const title = await helper.getPageTitle();
  expect(title).toContain('Dashboard');
});
```

### Example 2: Table Data Extraction
```typescript
test('Extract Table Data', async ({ page }) => {
  const helper = new PlaywrightGenerics(page);
  
  await helper.navigateToUrl('https://app.example.com/users');
  
  const table = page.locator('table');
  const tableData = await helper.getTableData(table);
  
  // tableData is 2D array: [['Name', 'Email'], ['John', 'john@ex.com'], ...]
  expect(tableData.length).toBeGreaterThan(0);
});
```

### Example 3: Dropdown Selection
```typescript
test('Select Dropdown', async ({ page }) => {
  const helper = new PlaywrightGenerics(page);
  
  const dropdown = page.locator('select#country');
  
  // Select by value
  await helper.selectByValue(dropdown, 'US');
  
  // Or select by visible label
  await helper.selectByLabel(dropdown, 'United States');
  
  // Get selected value
  const selected = await helper.getSelectedValue(dropdown);
  expect(selected).toBe('US');
});
```

### Example 4: File Upload
```typescript
test('Upload File', async ({ page }) => {
  const helper = new PlaywrightGenerics(page);
  
  const fileInput = page.locator('input[type="file"]');
  await helper.uploadFile(fileInput, './test-data/document.pdf');
  
  await helper.clickElement(page.locator('button[type="submit"]'));
  expect(await helper.validateText(
    page.locator('.success-message'),
    'File uploaded successfully'
  )).toBeTruthy();
});
```

### Example 5: Wait for Dynamic Content
```typescript
test('Wait for Dynamic Content', async ({ page }) => {
  const helper = new PlaywrightGenerics(page);
  
  const loader = page.locator('.loading-spinner');
  const content = page.locator('.dynamic-content');
  
  // Wait for loader to appear and disappear
  await helper.waitForElementHidden(loader);
  
  // Wait for content to be visible
  await helper.waitForElementVisible(content);
  
  const text = await helper.getText(content);
  expect(text).toBeTruthy();
});
```

---

## Best Practices

1. **Always use helper methods** instead of raw Playwright API for consistency
2. **Use dynamic waits** (waitForElementVisible) instead of hardcoded timeouts
3. **Pass Locators, not strings** - Use `page.locator()` first
4. **Chain methods** for readability and DRY principle
5. **Use specific selectors** - IDs > data-testid > CSS > XPath
6. **Validate with helper methods** - Use validateText, validateValue
7. **Log test progress** - Use log() method for debugging
8. **Screenshot on failure** - Capture visual state
9. **Clear between tests** - Use clearCookies, clearLocalStorage
10. **Handle multiple elements** - Use getMultipleElementsText, countElements

---

## Key Advantages

- **DRY Principle**: No code repetition across tests
- **Maintainability**: Changes in one place update all tests
- **Readability**: Self-documenting method names
- **Reliability**: Built-in waits and error handling
- **Flexibility**: Reusable across test suites
- **Debugging**: Integrated logging and pause capabilities
- **Performance**: Efficient batch operations (allTextContents, etc.)
- **Coverage**: 50+ methods covering common UI interactions

