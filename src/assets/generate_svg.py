def generate_polygon(points):
    return " ".join([f"{x},{y}" for x,y in points])

# Let's generate a single path for V-A zig zag.
# thickness = 7
# V left arm: from (36, 0) to (48, 30)
# V right / A left arm: from (48, 30) to (60, 0)
# A right arm: from (60, 0) to (72, 30)

# We want flat tops and bottoms (y=0 and y=30)
# Left arm:
# Top left: 34, 0
# Top right: 41, 0
# Bottom right: 53, 30
# Bottom left: 46, 30

def create_zigzag(x_start, y_top, y_bot, dx, thickness):
    # dx is horizontal distance for a full stroke down
    # x_start is center of the first top point
    path = f"M {x_start - thickness/2},{y_top} "
    path += f"L {x_start + thickness/2},{y_top} "
    
    # Bottom vertex 1 (V)
    path += f"L {x_start + dx},{y_bot} "
    
    # Top vertex 2 (A)
    path += f"L {x_start + 2*dx - thickness/2},{y_top} "
    
    # Top right of A
    path += f"L {x_start + 2*dx + thickness/2},{y_top} "
    
    # Bottom right of A
    path += f"L {x_start + 3*dx + thickness/2},{y_bot} "
    
    # Bottom left of A right arm
    path += f"L {x_start + 3*dx - thickness/2},{y_bot} "
    
    # Inner corner top of A
    path += f"L {x_start + 2*dx},{y_top + 10} " # Approx inner corner
    
    # Inner corner bottom of V
    path += f"L {x_start + dx},{y_bot - 10} " # Approx inner corner
    
    path += "Z"
    return path

print(create_zigzag(36, 0, 30, 12, 7))

