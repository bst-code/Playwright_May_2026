
import {Locator, Page, BrowserContext, FrameLocator} from "@playwright/test"

export class PlaywrightGenerics
{
    readonly page: Page;
    constructor(p:Page)
    {
        this.page = p
    }

    // ==================== TEXT INPUT METHODS ====================

    /**
     * Enter text into an input element
     * @param ele - Target locator element
     * @param text - Text to enter
     * @author Balamurugan
     */
    async enterText(ele:Locator, text:string): Promise<void>
    {
        await this.log(`enterText: Entering text "${text}"`);
        await ele.fill(text)
    }

    /**
     * Clear text from an input element
     * @param ele - Target locator element
     */
    async clearText(ele:Locator): Promise<void>
    {
        await this.log(`clearText: Clearing text from element`);
        await ele.clear()
    }

    /**
     * Get text from an element
     * @param ele - Target locator element
     * @returns Text content of the element
     */
    async getText(ele:Locator): Promise<string | null>
    {
        const data = await ele.textContent()
        await this.log(`getText: Getting text content from element ${data}`);
        return data
    }

    /**
     * Get inner text from an element
     * @param ele - Target locator element
     * @returns Inner text of the element
     */
    async getInnerText(ele:Locator): Promise<string>
    {
        await this.log(`getInnerText: Getting inner text from element`);
        return await ele.innerText()
    }

    /**
     * Type text slowly character by character
     * @param ele - Target locator element
     * @param text - Text to type
     * @param delay - Delay in milliseconds between characters
     */
    async typeText(ele:Locator, text:string, delay:number = 100): Promise<void>
    {
        await this.log(`typeText: Typing text "${text}" with delay ${delay}ms`);
        await ele.type(text, { delay })
    }

    // ==================== CLICK & INTERACTION METHODS ====================

    /**
     * Click on an element
     * @param ele - Target locator element
     */
    async clickElement(ele:Locator): Promise<void>
    {
        await this.log(`clickElement: Clicking element`);
        await ele.click()
    }

    /**
     * Double click on an element
     * @param ele - Target locator element
     */
    async doubleClickElement(ele:Locator): Promise<void>
    {
        await this.log(`doubleClickElement: Double-clicking element`);
        await ele.dblclick()
    }

    /**
     * Right click (context click) on an element
     * @param ele - Target locator element
     */
    async rightClickElement(ele:Locator): Promise<void>
    {
        await this.log(`rightClickElement: Right-clicking element`);
        await ele.click({ button: 'right' })
    }

    /**
     * Hover over an element
     * @param ele - Target locator element
     */
    async hoverElement(ele:Locator): Promise<void>
    {
        await this.log(`hoverElement: Hovering over element`);
        await ele.hover()
    }

    /**
     * Click and hold on an element
     * @param ele - Target locator element
     */
    async mouseDownAndUp(ele:Locator): Promise<void>
    {
        await this.log(`mouseDownAndUp: Mouse down and up on element`);
        await ele.dispatchEvent('mousedown')
        await ele.dispatchEvent('mouseup')
    }

    /**
     * Focus on an element
     * @param ele - Target locator element
     */
    async focusElement(ele:Locator): Promise<void>
    {
        await this.log(`focusElement: Focusing on element`);
        await ele.focus()
    }

    /**
     * Press a key on an element
     * @param ele - Target locator element
     * @param key - Key to press
     */
    async pressKey(ele:Locator, key:string): Promise<void>
    {
        await this.log(`pressKey: Pressing key "${key}"`);
        await ele.press(key)
    }

    // ==================== DROPDOWN/SELECT METHODS ====================

    /**
     * Select option by value from dropdown
     * @param ele - Select element locator
     * @param value - Value to select
     */
    async selectByValue(ele:Locator, value:string): Promise<void>
    {
        await this.log(`selectByValue: Selecting option with value "${value}"`);
        await ele.selectOption(value)
    }

    /**
     * Select option by label from dropdown
     * @param ele - Select element locator
     * @param label - Label text to select
     */
    async selectByLabel(ele:Locator, label:string): Promise<void>
    {
        await this.log(`selectByLabel: Selecting option with label "${label}"`);
        await ele.selectOption({ label })
    }

    /**
     * Select multiple options from dropdown
     * @param ele - Select element locator
     * @param values - Array of values to select
     */
    async selectMultiple(ele:Locator, values:string[]): Promise<void>
    {
        await this.log(`selectMultiple: Selecting multiple options: ${values.join(', ')}`);
        await ele.selectOption(values)
    }

    /**
     * Get all options from dropdown
     * @param ele - Select element locator
     * @returns Array of option values
     */
    async getDropdownOptions(ele:Locator): Promise<string[]>
    {
        await this.log(`getDropdownOptions: Getting all dropdown options`);
        return await ele.locator('option').allTextContents()
    }

    /**
     * Get selected value from dropdown
     * @param ele - Select element locator
     * @returns Selected value
     */
    async getSelectedValue(ele:Locator): Promise<string | null>
    {
        await this.log(`getSelectedValue: Getting selected value from dropdown`);
        return await ele.inputValue()
    }

    // ==================== WAIT METHODS ====================

    /**
     * Wait for element to be visible
     * @param ele - Target locator element
     * @param timeout - Timeout in milliseconds
     */
    async waitForElementVisible(ele:Locator, timeout:number = 5000): Promise<void>
    {
        await this.log(`waitForElementVisible: Waiting for element to be visible (timeout: ${timeout}ms)`);
        await ele.waitFor({ state: 'visible', timeout })
    }

    /**
     * Wait for element to be hidden
     * @param ele - Target locator element
     * @param timeout - Timeout in milliseconds
     */
    async waitForElementHidden(ele:Locator, timeout:number = 5000): Promise<void>
    {
        await this.log(`waitForElementHidden: Waiting for element to be hidden (timeout: ${timeout}ms)`);
        await ele.waitFor({ state: 'hidden', timeout })
    }

    /**
     * Wait for element to be enabled
     * @param ele - Target locator element
     * @param timeout - Timeout in milliseconds
     */
    async waitForElementEnabled(ele:Locator, timeout:number = 5000): Promise<void>
    {
        await this.log(`waitForElementEnabled: Waiting for element to be enabled (timeout: ${timeout}ms)`);
        await ele.waitFor({ state: 'attached', timeout })
        await this.page.waitForTimeout(500)
    }

    /**
     * Wait for specific timeout
     * @param timeout - Timeout in milliseconds
     */
    async waitForTimeout(timeout:number): Promise<void>
    {
        await this.log(`waitForTimeout: Waiting for ${timeout}ms`);
        await this.page.waitForTimeout(timeout)
    }

    /**
     * Wait for element count
     * @param locator - Locator to check
     * @param count - Expected count
     * @param timeout - Timeout in milliseconds
     */
    async waitForElementCount(locator:Locator, count:number, timeout:number = 5000): Promise<void>
    {
        await this.log(`waitForElementCount: Waiting for ${count} elements (timeout: ${timeout}ms)`);
        await locator.nth(count - 1).waitFor({ timeout })
    }

    /**
     * Wait for URL to match pattern
     * @param urlPattern - URL pattern or regex
     * @param timeout - Timeout in milliseconds
     */
    async waitForUrl(urlPattern:string | RegExp, timeout:number = 5000): Promise<void>
    {
        await this.log(`waitForUrl: Waiting for URL to match ${urlPattern} (timeout: ${timeout}ms)`);
        await this.page.waitForURL(urlPattern, { timeout })
    }

    // ==================== VISIBILITY & STATE CHECKS ====================

    /**
     * Check if element is visible
     * @param ele - Target locator element
     * @returns True if visible
     */
    async isElementVisible(ele:Locator): Promise<boolean>
    {
        await this.log(`isElementVisible: Checking if element is visible`);
        return await ele.isVisible()
    }

    /**
     * Check if element is hidden
     * @param ele - Target locator element
     * @returns True if hidden
     */
    async isElementHidden(ele:Locator): Promise<boolean>
    {
        await this.log(`isElementHidden: Checking if element is hidden`);
        return !(await ele.isVisible())
    }

    /**
     * Check if element is enabled
     * @param ele - Target locator element
     * @returns True if enabled
     */
    async isElementEnabled(ele:Locator): Promise<boolean>
    {
        await this.log(`isElementEnabled: Checking if element is enabled`);
        return await ele.isEnabled()
    }

    /**
     * Check if element is disabled
     * @param ele - Target locator element
     * @returns True if disabled
     */
    async isElementDisabled(ele:Locator): Promise<boolean>
    {
        await this.log(`isElementDisabled: Checking if element is disabled`);
        return !(await ele.isEnabled())
    }

    /**
     * Check if element exists in DOM
     * @param ele - Target locator element
     * @returns True if exists
     */
    async doesElementExist(ele:Locator): Promise<boolean>
    {
        await this.log(`doesElementExist: Checking if element exists`);
        const count = await ele.count()
        return count > 0
    }

    /**
     * Check if element is checked (for checkboxes/radio buttons)
     * @param ele - Target locator element
     * @returns True if checked
     */
    async isElementChecked(ele:Locator): Promise<boolean>
    {
        await this.log(`isElementChecked: Checking if element is checked`);
        return await ele.isChecked()
    }

    /**
     * Check element (checkbox or radio button)
     * @param ele - Target locator element
     */
    async checkElement(ele:Locator): Promise<void>
    {
        await this.log(`checkElement: Checking element`);
        await ele.check()
    }

    /**
     * Uncheck element (checkbox)
     * @param ele - Target locator element
     */
    async uncheckElement(ele:Locator): Promise<void>
    {
        await this.log(`uncheckElement: Unchecking element`);
        await ele.uncheck()
    }

    // ==================== ATTRIBUTE METHODS ====================

    /**
     * Get attribute value
     * @param ele - Target locator element
     * @param attributeName - Attribute name
     * @returns Attribute value
     */
    async getAttribute(ele:Locator, attributeName:string): Promise<string | null>
    {
        await this.log(`getAttribute: Getting attribute "${attributeName}"`);
        return await ele.getAttribute(attributeName)
    }

    /**
     * Set attribute value
     * @param ele - Target locator element
     * @param attributeName - Attribute name
     * @param value - Attribute value
     */
    async setAttribute(ele:Locator, attributeName:string, value:string): Promise<void>
    {
        await this.log(`setAttribute: Setting attribute "${attributeName}" to "${value}"`);
        await ele.evaluate((el, {attr, val}) => {
            el.setAttribute(attr, val)
        }, {attr: attributeName, val: value})
    }

    /**
     * Check if element has attribute
     * @param ele - Target locator element
     * @param attributeName - Attribute name
     * @returns True if attribute exists
     */
    async hasAttribute(ele:Locator, attributeName:string): Promise<boolean>
    {
        await this.log(`hasAttribute: Checking if attribute "${attributeName}" exists`);
        const value = await ele.getAttribute(attributeName)
        return value !== null
    }

    /**
     * Get class name
     * @param ele - Target locator element
     * @returns Class name string
     */
    async getClassName(ele:Locator): Promise<string | null>
    {
        await this.log(`getClassName: Getting class name`);
        return await ele.getAttribute('class')
    }

    /**
     * Check if element has specific class
     * @param ele - Target locator element
     * @param className - Class name to check
     * @returns True if has class
     */
    async hasClass(ele:Locator, className:string): Promise<boolean>
    {
        await this.log(`hasClass: Checking if element has class "${className}"`);
        const classes = await this.getClassName(ele)
        return classes ? classes.includes(className) : false
    }

    // ==================== KEYBOARD METHODS ====================

    /**
     * Press Enter key
     * @param ele - Target locator element
     */
    async pressEnter(ele:Locator): Promise<void>
    {
        await this.log(`pressEnter: Pressing Enter key`);
        await ele.press('Enter')
    }

    /**
     * Press Tab key
     * @param ele - Target locator element
     */
    async pressTab(ele:Locator): Promise<void>
    {
        await this.log(`pressTab: Pressing Tab key`);
        await ele.press('Tab')
    }

    /**
     * Press Escape key
     * @param ele - Target locator element
     */
    async pressEscape(ele:Locator): Promise<void>
    {
        await this.log(`pressEscape: Pressing Escape key`);
        await ele.press('Escape')
    }

    /**
     * Select all text (Ctrl+A)
     * @param ele - Target locator element
     */
    async selectAll(ele:Locator): Promise<void>
    {
        await this.log(`selectAll: Selecting all text (Ctrl+A)`);
        await ele.press('Control+A')
    }

    /**
     * Copy text (Ctrl+C)
     * @param ele - Target locator element
     */
    async copyText(ele:Locator): Promise<void>
    {
        await this.log(`copyText: Copying text (Ctrl+C)`);
        await ele.press('Control+C')
    }

    /**
     * Paste text (Ctrl+V)
     * @param ele - Target locator element
     */
    async pasteText(ele:Locator): Promise<void>
    {
        await this.log(`pasteText: Pasting text (Ctrl+V)`);
        await ele.press('Control+V')
    }

    // ==================== SCROLL METHODS ====================

    /**
     * Scroll element into view
     * @param ele - Target locator element
     */
    async scrollIntoView(ele:Locator): Promise<void>
    {
        await this.log(`scrollIntoView: Scrolling element into view`);
        await ele.scrollIntoViewIfNeeded()
    }

    /**
     * Scroll to top of page
     */
    async scrollToTop(): Promise<void>
    {
        await this.log(`scrollToTop: Scrolling to top of page`);
        await this.page.evaluate(() => window.scrollTo(0, 0))
    }

    /**
     * Scroll to bottom of page
     */
    async scrollToBottom(): Promise<void>
    {
        await this.log(`scrollToBottom: Scrolling to bottom of page`);
        await this.page.evaluate(() => window.scrollTo(0, document.body.scrollHeight))
    }

    /**
     * Scroll by specific amount
     * @param x - Horizontal scroll amount
     * @param y - Vertical scroll amount
     */
    async scrollBy(x:number, y:number): Promise<void>
    {
        await this.log(`scrollBy: Scrolling by x=${x}, y=${y}`);
        await this.page.evaluate(({x: xVal, y: yVal}) => window.scrollBy(xVal, yVal), {x, y})
    }

    /**
     * Get scroll position
     * @returns Object with x and y scroll positions
     */
    async getScrollPosition(): Promise<{x: number, y: number}>
    {
        await this.log(`getScrollPosition: Getting scroll position`);
        return await this.page.evaluate(() => ({
            x: window.scrollX,
            y: window.scrollY
        }))
    }

    // ==================== NAVIGATION METHODS ====================

    /**
     * Navigate to URL
     * @param url - URL to navigate to
     * @param waitUntil - Wait condition
     */
    async navigateToUrl(url:string, waitUntil: 'load' | 'domcontentloaded' | 'networkidle' = 'load'): Promise<void>
    {
        await this.log(`navigateToUrl: Navigating to ${url} (waitUntil: ${waitUntil})`);
        await this.page.goto(url, { waitUntil })
    }

    /**
     * Go back in browser history
     */
    async goBack(): Promise<void>
    {
        await this.log(`goBack: Going back in browser history`);
        await this.page.goBack()
    }

    /**
     * Go forward in browser history
     */
    async goForward(): Promise<void>
    {
        await this.log(`goForward: Going forward in browser history`);
        await this.page.goForward()
    }

    /**
     * Reload page
     * @param waitUntil - Wait condition
     */
    async reloadPage(waitUntil: 'load' | 'domcontentloaded' | 'networkidle' = 'load'): Promise<void>
    {
        await this.log(`reloadPage: Reloading page (waitUntil: ${waitUntil})`);
        await this.page.reload({ waitUntil })
    }

    /**
     * Get current page URL
     * @returns Current URL
     */
    async getCurrentUrl(): Promise<string>
    {
        await this.log(`getCurrentUrl: Getting current URL`);
        return this.page.url()
    }

    /**
     * Get page title
     * @returns Page title
     */
    async getPageTitle(): Promise<string>
    {
        await this.log(`getPageTitle: Getting page title`);
        return await this.page.title()
    }

    // ==================== ALERT & DIALOG METHODS ====================

    /**
     * Accept alert/dialog
     */
    async acceptAlert(): Promise<void>
    {
        await this.log(`acceptAlert: Accepting alert dialog`);
        this.page.once('dialog', dialog => dialog.accept())
    }

    /**
     * Dismiss alert/dialog
     */
    async dismissAlert(): Promise<void>
    {
        await this.log(`dismissAlert: Dismissing alert dialog`);
        this.page.once('dialog', dialog => dialog.dismiss())
    }

    /**
     * Handle alert with text input
     * @param text - Text to input in alert
     */
    async alertHandleWithText(text:string): Promise<void>
    {
        await this.log(`alertHandleWithText: Handling alert with text "${text}"`);
        this.page.once('dialog', dialog => dialog.accept(text))
    }

    /**
     * Get alert message
     * @returns Alert message text
     */
    async getAlertMessage(): Promise<string | null>
    {
        await this.log(`getAlertMessage: Getting alert message`);
        let message: string | null = null
        this.page.once('dialog', dialog => {
            message = dialog.message()
            dialog.dismiss()
        })
        return message
    }

    // ==================== SCREENSHOT & VISUAL METHODS ====================

    /**
     * Take screenshot of entire page
     * @param filename - Output filename
     */
    async takeScreenshot(filename:string): Promise<void>
    {
        await this.log(`takeScreenshot: Taking screenshot to ${filename}`);
        await this.page.screenshot({ path: filename, fullPage: true })
    }

    /**
     * Take screenshot of specific element
     * @param ele - Target locator element
     * @param filename - Output filename
     */
    async takeElementScreenshot(ele:Locator, filename:string): Promise<void>
    {
        await this.log(`takeElementScreenshot: Taking element screenshot to ${filename}`);
        await ele.screenshot({ path: filename })
    }

    /**
     * Get screenshot as buffer
     * @returns Screenshot buffer
     */
    async getScreenshotBuffer(): Promise<Uint8Array>
    {
        await this.log(`getScreenshotBuffer: Getting screenshot as buffer`);
        return await this.page.screenshot()
    }

    // ==================== TABLE & LIST METHODS ====================

    /**
     * Get all rows from table
     * @param tableLocator - Table element locator
     * @returns Array of row locators
     */
    async getTableRows(tableLocator:Locator): Promise<Locator[]>
    {
        await this.log(`getTableRows: Getting all rows from table`);
        const rows = tableLocator.locator('tbody tr')
        const count = await rows.count()
        const rowArray: Locator[] = []
        
        for (let i = 0; i < count; i++) {
            rowArray.push(rows.nth(i))
        }
        return rowArray
    }

    /**
     * Get cell data from table row
     * @param rowLocator - Row element locator
     * @param cellIndex - Column index
     * @returns Cell text content
     */
    async getTableCellData(rowLocator:Locator, cellIndex:number): Promise<string>
    {
        await this.log(`getTableCellData: Getting cell data at index ${cellIndex}`);
        return await rowLocator.locator('td').nth(cellIndex).textContent() || ''
    }

    /**
     * Get all text from table
     * @param tableLocator - Table element locator
     * @returns 2D array of table data
     */
    async getTableData(tableLocator:Locator): Promise<string[][]>
    {
        await this.log(`getTableData: Getting all table data`);
        const rows = await this.getTableRows(tableLocator)
        const tableData: string[][] = []

        for (const row of rows) {
            const cells = row.locator('td')
            const cellCount = await cells.count()
            const rowData: string[] = []

            for (let i = 0; i < cellCount; i++) {
                const cellText = await cells.nth(i).textContent() || ''
                rowData.push(cellText.trim())
            }
            tableData.push(rowData)
        }
        return tableData
    }

    /**
     * Get all list items text
     * @param listLocator - List element locator
     * @returns Array of list item texts
     */
    async getListItems(listLocator:Locator): Promise<string[]>
    {
        await this.log(`getListItems: Getting all list items`);
        return await listLocator.locator('li').allTextContents()
    }

    /**
     * Get list item count
     * @param listLocator - List element locator
     * @returns Count of list items
     */
    async getListItemCount(listLocator:Locator): Promise<number>
    {
        await this.log(`getListItemCount: Getting count of list items`);
        return await listLocator.locator('li').count()
    }

    // ==================== WINDOW & POPUP METHODS ====================

    /**
     * Get window size
     * @returns Object with width and height
     */
    async getWindowSize(): Promise<{width: number, height: number}>
    {
        await this.log(`getWindowSize: Getting window size`);
        const size = await this.page.viewportSize()
        return size || {width: 0, height: 0}
    }

    /**
     * Set window size
     * @param width - Window width
     * @param height - Window height
     */
    async setWindowSize(width:number, height:number): Promise<void>
    {
        await this.log(`setWindowSize: Setting window size to ${width}x${height}`);
        await this.page.setViewportSize({width, height})
    }

    /**
     * Maximize window (set to large viewport)
     */
    async maximizeWindow(): Promise<void>
    {
        await this.log(`maximizeWindow: Maximizing window to 1920x1080`);
        await this.page.setViewportSize({width: 1920, height: 1080})
    }

    /**
     * Handle new page/popup
     * @returns New page instance
     */
    async handleNewPage(): Promise<Page>
    {
        await this.log(`handleNewPage: Waiting for new page/popup`);
        const [newPage] = await Promise.all([
            this.page.context().waitForEvent('page')
        ])
        return newPage
    }

    // ==================== FRAME & IFRAME METHODS ====================

    /**
     * Get frame by name
     * @param frameName - Frame name attribute
     * @returns Frame locator
     */
    getFrameByName(frameName:string): FrameLocator
    {
        this.log(`getFrameByName: Getting frame with name "${frameName}"`);
        return this.page.frameLocator(`[name="${frameName}"]`)
    }

    /**
     * Get frame by index
     * @param frameIndex - Frame index
     * @returns Frame locator
     */
    getFrameByIndex(frameIndex:number): FrameLocator
    {
        this.log(`getFrameByIndex: Getting frame at index ${frameIndex}`);
        return this.page.frameLocator('iframe').nth(frameIndex)
    }

    /**
     * Switch to frame
     * @param frameName - Frame name
     * @returns Frame locator
     */
    switchToFrame(frameName:string): FrameLocator
    {
        this.log(`switchToFrame: Switching to frame "${frameName}"`);
        return this.getFrameByName(frameName)
    }

    /**
     * Get all frames
     * @returns Array of frame locators
     */
    async getAllFrames(): Promise<FrameLocator[]>
    {
        await this.log(`getAllFrames: Getting all frames on page`);
        const iframeLocator = this.page.locator('iframe')
        const frameCount = await iframeLocator.count()
        const frames: FrameLocator[] = []
        
        for (let i = 0; i < frameCount; i++) {
            frames.push(this.page.frameLocator('iframe').nth(i))
        }
        return frames
    }

    // ==================== DRAG & DROP METHODS ====================

    /**
     * Drag and drop element
     * @param sourceEle - Source element to drag
     * @param targetEle - Target element to drop on
     */
    async dragAndDrop(sourceEle:Locator, targetEle:Locator): Promise<void>
    {
        await this.log(`dragAndDrop: Dragging and dropping element`);
        await sourceEle.dragTo(targetEle)
    }

    /**
     * Drag element by offset
     * @param ele - Element to drag
     * @param x - Horizontal offset
     * @param y - Vertical offset
     */
    async dragByOffset(ele:Locator, x:number, y:number): Promise<void>
    {
        await this.log(`dragByOffset: Dragging element by offset x=${x}, y=${y}`);
        await ele.hover()
        await this.page.mouse.move(1, 1)
        await this.page.mouse.down()
        await this.page.mouse.move(x, y)
        await this.page.mouse.up()
    }

    // ==================== FILE UPLOAD METHODS ====================

    /**
     * Upload file to input element
     * @param ele - File input element locator
     * @param filePath - Path to file to upload
     */
    async uploadFile(ele:Locator, filePath:string): Promise<void>
    {
        await this.log(`uploadFile: Uploading file ${filePath}`);
        await ele.setInputFiles(filePath)
    }

    /**
     * Upload multiple files
     * @param ele - File input element locator
     * @param filePaths - Array of file paths to upload
     */
    async uploadMultipleFiles(ele:Locator, filePaths:string[]): Promise<void>
    {
        await this.log(`uploadMultipleFiles: Uploading files ${filePaths.join(', ')}`);
        await ele.setInputFiles(filePaths)
    }

    /**
     * Clear file input
     * @param ele - File input element locator
     */
    async clearFileInput(ele:Locator): Promise<void>
    {
        await this.log(`clearFileInput: Clearing file input`);
        await ele.setInputFiles([])
    }

    // ==================== JAVASCRIPT EXECUTION METHODS ====================

    /**
     * Execute JavaScript and return result
     * @param script - JavaScript code to execute
     * @returns Result of JavaScript execution
     */
    async executeJavaScript(script:string): Promise<any>
    {
        await this.log(`executeJavaScript: Executing JavaScript`);
        return await this.page.evaluate(script)
    }

    /**
     * Execute JavaScript with parameters
     * @param script - JavaScript code to execute
     * @param params - Parameters to pass to script
     * @returns Result of JavaScript execution
     */
    async executeJavaScriptWithParams(script:string, params:any): Promise<any>
    {
        await this.log(`executeJavaScriptWithParams: Executing JavaScript with parameters`);
        return await this.page.evaluate(script, params)
    }

    /**
     * Get element using JavaScript
     * @param selector - CSS selector
     * @returns Element object
     */
    async getElementByJS(selector:string): Promise<any>
    {
        await this.log(`getElementByJS: Getting element with selector "${selector}"`);
        return await this.page.evaluate((sel) => document.querySelector(sel), selector)
    }

    /**
     * Check if element exists using JavaScript
     * @param selector - CSS selector
     * @returns True if element exists
     */
    async checkElementExistsByJS(selector:string): Promise<boolean>
    {
        await this.log(`checkElementExistsByJS: Checking if element with selector "${selector}" exists`);
        return await this.page.evaluate((sel) => !!document.querySelector(sel), selector)
    }

    /**
     * Get element count using JavaScript
     * @param selector - CSS selector
     * @returns Element count
     */
    async getElementCountByJS(selector:string): Promise<number>
    {
        await this.log(`getElementCountByJS: Getting element count for selector "${selector}"`);
        return await this.page.evaluate((sel) => document.querySelectorAll(sel).length, selector)
    }

    /**
     * Get page source
     * @returns HTML content of page
     */
    async getPageSource(): Promise<string>
    {
        await this.log(`getPageSource: Getting page source`);
        return await this.page.content()
    }

    /**
     * Inject CSS
     * @param css - CSS code to inject
     */
    async injectCSS(css:string): Promise<void>
    {
        await this.log(`injectCSS: Injecting CSS`);
        await this.page.addStyleTag({content: css})
    }

    /**
     * Inject JavaScript file
     * @param scriptPath - Path to JavaScript file
     */
    async injectJSFile(scriptPath:string): Promise<void>
    {
        await this.log(`injectJSFile: Injecting JavaScript file ${scriptPath}`);
        await this.page.addScriptTag({path: scriptPath})
    }

    // ==================== COOKIE & LOCAL STORAGE METHODS ====================

    /**
     * Add cookie
     * @param name - Cookie name
     * @param value - Cookie value
     * @param options - Cookie options
     */
    async addCookie(name:string, value:string, options?: any): Promise<void>
    {
        await this.log(`addCookie: Adding cookie "${name}" with value "${value}"`);
        const cookies = [{
            name,
            value,
            url: this.page.url(),
            ...options
        }]
        await this.page.context().addCookies(cookies)
    }

    /**
     * Get cookie
     * @param name - Cookie name
     * @returns Cookie value
     */
    async getCookie(name:string): Promise<string | undefined>
    {
        await this.log(`getCookie: Getting cookie "${name}"`);
        const cookies = await this.page.context().cookies()
        const cookie = cookies.find(c => c.name === name)
        return cookie?.value
    }

    /**
     * Get all cookies
     * @returns Array of all cookies
     */
    async getAllCookies(): Promise<any[]>
    {
        await this.log(`getAllCookies: Getting all cookies`);
        return await this.page.context().cookies()
    }

    /**
     * Delete cookie
     * @param name - Cookie name
     */
    async deleteCookie(name:string): Promise<void>
    {
        await this.log(`deleteCookie: Deleting cookie "${name}"`);
        const cookies = await this.page.context().cookies()
        const filteredCookies = cookies.filter(c => c.name !== name)
        await this.page.context().clearCookies()
        await this.page.context().addCookies(filteredCookies)
    }

    /**
     * Clear all cookies
     */
    async clearAllCookies(): Promise<void>
    {
        await this.log(`clearAllCookies: Clearing all cookies`);
        await this.page.context().clearCookies()
    }

    /**
     * Set local storage
     * @param key - Storage key
     * @param value - Storage value
     */
    async setLocalStorage(key:string, value:string): Promise<void>
    {
        await this.log(`setLocalStorage: Setting localStorage key "${key}" to "${value}"`);
        await this.page.evaluate(({k, v}) => {
            localStorage.setItem(k, v)
        }, {k: key, v: value})
    }

    /**
     * Get local storage
     * @param key - Storage key
     * @returns Storage value
     */
    async getLocalStorage(key:string): Promise<string | null>
    {
        await this.log(`getLocalStorage: Getting localStorage key "${key}"`);
        return await this.page.evaluate((k) => localStorage.getItem(k), key)
    }

    /**
     * Clear local storage
     */
    async clearLocalStorage(): Promise<void>
    {
        await this.log(`clearLocalStorage: Clearing all localStorage`);
        await this.page.evaluate(() => localStorage.clear())
    }

    /**
     * Set session storage
     * @param key - Storage key
     * @param value - Storage value
     */
    async setSessionStorage(key:string, value:string): Promise<void>
    {
        await this.log(`setSessionStorage: Setting sessionStorage key "${key}" to "${value}"`);
        await this.page.evaluate(({k, v}) => {
            sessionStorage.setItem(k, v)
        }, {k: key, v: value})
    }

    /**
     * Get session storage
     * @param key - Storage key
     * @returns Storage value
     */
    async getSessionStorage(key:string): Promise<string | null>
    {
        await this.log(`getSessionStorage: Getting sessionStorage key "${key}"`);
        return await this.page.evaluate((k) => sessionStorage.getItem(k), key)
    }

    /**
     * Clear session storage
     */
    async clearSessionStorage(): Promise<void>
    {
        await this.log(`clearSessionStorage: Clearing all sessionStorage`);
        await this.page.evaluate(() => sessionStorage.clear())
    }

    // ==================== VALIDATION & ASSERTION HELPER METHODS ====================

    /**
     * Validate text matches
     * @param ele - Target locator element
     * @param expectedText - Expected text
     * @returns True if text matches
     */
    async validateText(ele:Locator, expectedText:string): Promise<boolean>
    {
        await this.log(`validateText: Validating text contains "${expectedText}"`);
        const actualText = await this.getText(ele)
        return actualText?.includes(expectedText) || false
    }

    /**
     * Validate element value
     * @param ele - Target locator element
     * @param expectedValue - Expected value
     * @returns True if value matches
     */
    async validateValue(ele:Locator, expectedValue:string): Promise<boolean>
    {
        await this.log(`validateValue: Validating value equals "${expectedValue}"`);
        const actualValue = await ele.inputValue()
        return actualValue === expectedValue
    }

    /**
     * Count elements
     * @param locator - Locator to count
     * @returns Count of elements
     */
    async countElements(locator:Locator): Promise<number>
    {
        await this.log(`countElements: Counting elements`);
        return await locator.count()
    }

    /**
     * Get list of all text from elements
     * @param locator - Locator for multiple elements
     * @returns Array of text contents
     */
    async getMultipleElementsText(locator:Locator): Promise<string[]>
    {
        await this.log(`getMultipleElementsText: Getting text from multiple elements`);
        return await locator.allTextContents()
    }

    // ==================== PERFORMANCE & DEBUG METHODS ====================

    /**
     * Log message to console
     * @param message - Message to log
     */
    async log(message:string): Promise<void>
    {
        console.log(`[PlaywrightGenerics] ${message}`)
        return
    }

    /**
     * Log page errors
     */
    async logPageErrors(): Promise<void>
    {
        await this.log(`logPageErrors: Setting up page error logging`);
        this.page.on('pageerror', error => {
            console.error('[Page Error]', error)
        })
    }

    /**
     * Get browser console logs
     */
    async getConsoleLogs(): Promise<void>
    {
        await this.log(`getConsoleLogs: Setting up console log capture`);
        this.page.on('console', msg => {
            console.log(`[Console] ${msg.type()}: ${msg.text()}`)
        })
    }

    /**
     * Pause execution (for debugging)
     */
    async pause(): Promise<void>
    {
        await this.log(`pause: Pausing execution for debugging`);
        await this.page.pause()
    }

    /**
     * Close page
     */
    async closePage(): Promise<void>
    {
        await this.log(`closePage: Closing page`);
        await this.page.close()
    }
}
