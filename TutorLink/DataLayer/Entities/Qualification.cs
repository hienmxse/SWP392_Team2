using System.ComponentModel.Design;

namespace DataLayer.Entities;

public class Qualification
{
    public Guid QualificationId { get; set; }
    public Types QualificationType { get; set; }
    public string QualificationName { get; set; }
    public string InstitutionName { get; set; }
    public DateTime? YearObtained { get; set; }
    public Guid TutorId { get; set; }
    
    public virtual Tutor? Tutor { get; set; }
}

public enum Types
{
    Degree,
    Skill
}