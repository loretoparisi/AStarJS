function Cell(x, y){
    this.x = x;
    this.y = y;
	this.wall = false;

    this.f = 0;
    this.g = 0;
    this.h = 0;
    this.weight = 1;

    this.previous = undefined;
    this.neighbors = [];

    this.addNeighbors = function (grid){
		this.neighbors = [];
        if(this.x < grid.length - 1)
            this.neighbors.push(grid[this.x + 1][this.y]);
        if(this.x > 0)
            this.neighbors.push(grid[this.x - 1][this.y]);
        if(this.y < grid.length - 1)
            this.neighbors.push(grid[this.x][this.y + 1]);
        if(this.y > 0)
            this.neighbors.push(grid[this.x][this.y - 1]);

        if(this.x > 0 && this.y > 0)
            this.neighbors.push(grid[this.x - 1][this.y - 1]);
        if(this.x > 0 && this.y < grid.length - 1)
            this.neighbors.push(grid[this.x - 1][this.y + 1]);
        if(this.x < grid.length - 1 && this.y > 0)
            this.neighbors.push(grid[this.x + 1][this.y - 1]);
        if(this.x < grid.length - 1 && this.y < grid.length - 1)
            this.neighbors.push(grid[this.x + 1][this.y + 1]);
    }
    
    this.drawCell = function(color, cellSize) {
		fill(color)
        noStroke()
		rect(this.x * cellSize + 3/2, this.y * cellSize + 3/2, cellSize - 4, cellSize - 4, 5);
    }
}
