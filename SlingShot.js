class SlingShot{
    constructor (bodyX, bodyY){
        var options = {
            bodyA:bodyX,
            bodyB:bodyY,
            stiffness:0.05,
            lenght:10,
        }
        this.SlingShot = Constraint.create(options)
        World.add(world,this.SlingShot)
    }
    display(){
        var pointA = this.SlingShot.bodyA.position
        var pointB = this.SlingShot.bodyB.position
        strokeWeight(5)
        line(pointA.x, pointA.y, pointB.x, pointB.y)
    }
}
