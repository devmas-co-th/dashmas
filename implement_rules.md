# Implementation Rules and Guidelines

## 1. Code Modification Principles

### 1.1 Full Code Implementation
- **Rule**: When modifying any code, always provide the FULL, updated implementation.
- **Prohibited**: Commenting out old code or suggesting partial changes.
- **Requirement**: Replace entire file/component with complete, updated code.

### 1.2 Comprehensive Updates
- Every code change must include:
  - Full file contents
  - Complete implementation
  - No placeholders or partial updates

## 2. Structural Changes

### 2.1 Impact Assessment
- For changes affecting project structure:
  - Provide detailed explanation
  - List potential impacts
  - Outline benefits and risks
  - Seek confirmation before implementation

### 2.2 Documentation
- Document structural changes in:
  - `CHANGELOG.md`
  - Relevant README files
  - Inline code comments if necessary

## 3. Pre-Implementation Review

### 3.1 Mandatory Checklist
Before any implementation:
- [ ] Review `implement_rules.md`
- [ ] Assess change scope
- [ ] Validate implementation approach
- [ ] Consider backward compatibility
- [ ] Prepare comprehensive update

### 3.2 Review Process
- Carefully examine proposed changes
- Verify alignment with project goals
- Ensure code quality and maintainability

## 4. Code Quality Standards

### 4.1 General Principles
- Write clean, readable code
- Follow existing project conventions
- Maintain consistent formatting
- Optimize for performance and readability

### 4.2 Specific Guidelines
- Use meaningful variable and function names
- Keep functions and components focused
- Minimize code complexity
- Write self-documenting code

## 5. Version Control

### 5.1 Commit Guidelines
- Write clear, descriptive commit messages
- Include context and reason for changes
- Reference related issues if applicable

### 5.2 Branch Strategy
- Create feature branches for significant changes
- Use descriptive branch names
- Merge via pull requests with thorough review

## 6. Performance and Optimization

### 6.1 Considerations
- Evaluate performance impact of changes
- Use profiling tools when necessary
- Benchmark critical sections

### 6.2 Optimization Approach
- Prioritize readability over premature optimization
- Optimize only when there's measurable benefit
- Document optimization rationale

## 7. Testing

### 7.1 Test Coverage
- Ensure changes are accompanied by appropriate tests
- Update existing tests
- Add new tests for new functionality

### 7.2 Test Types
- Unit tests
- Integration tests
- Regression tests

## 8. Documentation

### 8.1 Code Documentation
- Use JSDoc or similar documentation standards
- Document complex logic
- Explain "why" not just "what"

### 8.2 External Documentation
- Update project documentation
- Reflect significant changes in README
- Maintain clear, up-to-date documentation

## 9. Continuous Improvement

### 9.1 Feedback Loop
- Continuously review and refine implementation rules
- Be open to suggestions and improvements
- Adapt guidelines based on project evolution

---

**Note**: These rules are living guidelines. They should be reviewed and updated as the project grows and evolves.
