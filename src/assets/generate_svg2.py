t = 8   # thickness
h = 30  # height
skew_offset = 10 # to offset the top of the letters if we don't use skewX, but we can just use transform skewX.
# Let's use transform skewX(-20) and just draw straight coordinates.
# Vertical line thickness = 8
# Diagonal line thickness = 8 (horizontal width will be slightly more, say 10 to keep optical weight)

# N:
N_path = f"M 0,0 L 8,0 L 22,{h} L 22,0 L 30,0 L 30,{h} L 22,{h} L 8,0 L 8,{h} L 0,{h} Z"

# I:
I_path = f"M 40,0 L 48,0 L 48,{h} L 40,{h} Z"

# VA:
# Let's say dx = 14 for diagonals.
# Center of first top: x = 60
# V left arm goes from 60 to 74
# V right arm goes from 74 to 88
# A right arm goes from 88 to 102
x0 = 60
dx = 14
w = 10 # horizontal thickness of diagonal

VA_path = (
    f"M {x0-w/2},0 L {x0+w/2},0 " # Top left of V
    f"L {x0+dx},{h - 10} " # Inner bottom of V
    f"L {x0+2*dx - w/2},0 " # Inner top of A
    f"L {x0+2*dx + w/2},0 " # Top right of A
    f"L {x0+3*dx + w/2},{h} " # Bottom right of A
    f"L {x0+3*dx - w/2},{h} " # Bottom left of A's right leg
    f"L {x0+2*dx},{10} " # Inner top of A (underneath)
    f"L {x0+dx},{h} " # Bottom point of V
    "Z"
)

# Wave:
# Starts on the left side of A's left arm (which is the V's right arm)
# The V's right arm goes from (x0+dx, h) to (x0+2*dx, 0).
# Let's say y = 18.
# x on the right arm of V at y=18: x = x0 + dx + (dx)*(h-18)/h = 60 + 14 + 14*12/30 = 74 + 5.6 = 79.6
# Let's just use exact wave:
Wave_path = f"M 74,18 Q 88,18, 100,26 Q 108,30, 116,16 Q 108,34, 96,28 Q 85,23, 76,24 Z"

print(f"N: {N_path}")
print(f"I: {I_path}")
print(f"VA: {VA_path}")
print(f"Wave: {Wave_path}")

